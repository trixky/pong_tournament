class Api::BansController < ApplicationController
    respond_to :json

    # ===================================================================== | INDEX |
    # ===================================/
    # =====================/

    def update
        object = JSON.parse(cookies.encrypted[:data])
        
        if (params[:new_status] != nil && params[:id] != nil)
            @user = User.find_by_pseudo(params[:id])
            if (@user && are_friend(object) == false)
                @ub = UsersBan.where({first_user_id: object["id"]}).find_by_second_user_id(@user.id)
                if (@ub)
                    @ub.first_user_block = params[:new_status]
                    @ub.save
                else
                    @ub = UsersBan.where({first_user_id: @user.id}).find_by_second_user_id(object["id"])
                    if (@ub)
                        @ub.second_user_block = params[:new_status]
                        @ub.save
                    else
                        @ub = UsersBan.new(first_user_id: object["id"], second_user_id: @user.id, first_user_block: params[:new_status], second_user_block: false)
                        @ub.save
                    end
                end
            end
        end
        if (params[:new_status])
            annule_casual_battle_invitation(object)
            annule_friend_invitation(object)
        end
        someone_need_to_refresh_his_notification(User.find(object["id"]).pseudo)
    end

    private

    def are_friend(object)
        are_friend = false
        @fl = FriendsLink.where({first_user_id: object["id"]}).find_by_second_user_id(@user.id)
        @fl = FriendsLink.where({first_user_id: @user.id}).find_by_second_user_id(object["id"]) unless @fl
        are_friend = true if (@fl && @fl.first_user_accept == true && @fl.second_user_accept == true)
        are_friend
    end

    def annule_casual_battle_invitation(object)
        @br = BattlesRequest.where({first_entity_id: object["id"], type_battle: 'casual'})
        @br.each do |battle|
            battle_id = battle.second_entity_id
            battle.destroy
            someone_need_to_refresh_his_notification(User.find(battle_id).pseudo)
        end
    end
    
    def annule_friend_invitation(object)
        @fl = FriendsLink.where({first_user_id: object["id"]})
        @fl.each do |friendlink|
            if (friendlink.first_user_accept == true)
                friendlink_id = friendlink.second_user_id
                friendlink.destroy
                someone_need_to_refresh_his_notification(User.find(friendlink_id).pseudo)
            end
        end
        
        @fl = FriendsLink.where({second_user_id: object["id"]})
        @fl.each do |friendlink|
            if (friendlink.second_user_accept == true)
                friendlink_id = friendlink.first_user_id
                friendlink.destroy
                someone_need_to_refresh_his_notification(User.find(friendlink_id).pseudo)
            end
        end
    end

    def someone_need_to_refresh_his_notification(pseudo)
        ActionCable.server.broadcast("user_channel_#{pseudo}", {"messageContent": "refresh", "username": "notification", "date": "noDate"})
    end
end
