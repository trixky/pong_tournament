class Api::FriendsController < ApplicationController
  respond_to :json

  class CustomFriend
    def initialize(id, pseudo, i_mute, onsite)
      @id = id
      @pseudo = pseudo
      @i_mute = i_mute == nil ? false : i_mute
      @onsite = onsite == nil ? false : onsite
    end
  end

  def index
    request.format = :json
    object = JSON.parse(cookies.encrypted[:data])
    arrayCustomFriend = Array.new

    @all_first = FriendsLink.where({first_user_id: object["id"]})
    if (@all_first != nil)
      @all_first.each do |first|
        if (first.first_user_accept == true && first.second_user_accept == true)
          @u = User.find(first.second_user_id)
          if (@u)
            arrayCustomFriend.append(CustomFriend.new(first.id, @u.pseudo, first.first_user_mute, @u.onsite))
          end
        end
      end
    end

    @all_second = FriendsLink.where({second_user_id: object["id"]})
      if (@all_second != nil)
      @all_second.each do |second|
        if (second.first_user_accept == true && second.second_user_accept == true)
          @u = User.find(second.first_user_id)
          if (@u)
            arrayCustomFriend.append(CustomFriend.new(second.id, @u.pseudo, second.second_user_mute, @u.onsite))
          end
        end
      end
    end

    respond_with arrayCustomFriend
  end

  def create
    object = JSON.parse(cookies.encrypted[:data])
    
    if (params[:pseudo])
      @me = User.find(object["id"])
      @him = User.find_by_pseudo(params[:pseudo])
      if (@me && @him)
        # @fl = FriendsLink.find_by(first_user_id: @me, second_user_id: @him)
        @fl = FriendsLink.where({first_user_id: @me}).find_by_second_user_id(@him)
        # @fl = FriendsLink.find_by(first_user_id: @him, second_user_id: @me) unless @fl
        @fl = FriendsLink.where({first_user_id: @him}).find_by_second_user_id(@me) unless @fl
        if (@fl)
          if (!@fl.first_user_accept && !@fl.second_user_accept)
            !(@fl.first_user_id == @me) ? @fl.first_user_accept = true : @fl.second_user_accept = true
            @fl.save
            someone_need_to_refresh_his_notification(@him.pseudo)
          end
        else
          fl = FriendsLink.new(first_user_id: @me.id, second_user_id: @him.id, first_user_accept: true, second_user_accept: false)
          fl.save
          someone_need_to_refresh_his_notification(@him.pseudo)
        end
      end
    end
  end

  def update
    request.format = :json
    object = JSON.parse(cookies.encrypted[:data])
    
    if (params[:order])
      if (params[:order] == 'accept-invitation')
        update_accept_decline_breakdown(true, object)
      elsif (params[:order] == 'decline-invitation' || params[:order] == 'breakdown')
        update_accept_decline_breakdown(false, object)
      elsif (params[:order] == 'mute-friend')
        update_mute_friend(object)
      end
    end

    res = {res: "end"}.to_json
    respond_with res
  end

  def destroy
    object = JSON.parse(cookies.encrypted[:data])
    
    if (params[:id])
      @me = User.find(object["id"])
      @him = User.find_by_pseudo(params[:id])
      if (@me && @him)
        # @fl = FriendsLink.find_by(first_user_id: @me, second_user_id: @him)
        @fl = FriendsLink.where({first_user_id: @me}).find_by_second_user_id(@him)
        # @fl = FriendsLink.find_by(first_user_id: @him, second_user_id: @me) unless @fl
        @fl = FriendsLink.where({first_user_id: @him}).find_by_second_user_id(@me) unless @fl
        if (@fl)
          @fl.destroy
          someone_need_to_refresh_his_notification(@him.pseudo)
        end
      end
    end
  end

  private
  
  def update_accept_decline_breakdown(accept, object)
    if (params[:id])
      @me = User.find(object["id"])
      @him = User.find_by_pseudo(params[:id])
      if (@me && @him)
        @fl = FriendsLink.where({first_user_id: @me}).find_by_second_user_id(@him)
        @fl = FriendsLink.where({first_user_id: @him}).find_by_second_user_id(@me) unless @fl
        if (@fl)
          @fl.first_user_accept = accept
          @fl.second_user_accept = accept
          @fl.save
          someone_need_to_refresh_his_notification(@him.pseudo)
        end
      end
    end
  end

  private

  def update_mute_friend(object)
    if (params[:id] && params[:mute] != nil)
      @me = User.find(object["id"])
      @him = User.find_by_pseudo(params[:id])
      if (@me && @him)
        @fl = FriendsLink.where({first_user_id: @me}).find_by_second_user_id(@him)
        if (@fl)
          if (params[:mute])
            @fl.first_user_mute = Time.now
          else
            @fl.first_user_mute = nil
          end
          @fl.save
        else
          @fl = FriendsLink.where({first_user_id: @him}).find_by_second_user_id(@me)
          if (@fl)
            if (params[:mute])
              @fl.second_user_mute = Time.now
            else
              @fl.second_user_mute = nil
            end
            @fl.save
          end
        end
      end
    end
  end

  def someone_need_to_refresh_his_notification(pseudo)
    ActionCable.server.broadcast("user_channel_#{pseudo}", {"messageContent": "refresh", "username": "notification", "date": "noDate"})
  end

end