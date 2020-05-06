class Api::WarsController < ApplicationController
    skip_before_action :verify_authenticity_token

    
    class CustomWar

      def initialize(enemy, prize, my_point, his_point, start_at, end_at, my_unanswered, his_unanswered, max_unanswered, ended)
        im_winner = nil
        if (ended == false)
          im_winner = "in progress"
        elsif (my_unanswered >= max_unanswered)
          im_winner = "👎"
        elsif (his_unanswered >= max_unanswered)
          im_winner = "👍"
        elsif (my_point < his_point)
          im_winner = "👎"
        else
          im_winner = "👍"
        end

        @enemy = enemy
        @prize = prize
        @my_point = my_point.to_i
        @his_point = his_point.to_i
        @start_at = start_at
        @end_at = end_at
        @im_winner = im_winner
      end
  
    end

    def index
      check_ended_war()
      if (params[:guild] != nil)
        arrayCustomWar = Array.new
        @wars = War.where({player1: params[:guild]})
        @wars.each do |war|
          arrayCustomWar.append(CustomWar.new(war.player2, war.prize, war.player1_points, war.player2_points, war.start_at, war.end_at, war.player1_unanswered, war.player2_unanswered, war.max_unanswered, war.ended))
        end
        @wars = War.where({player2: params[:guild]})
        @wars.each do |war|
          arrayCustomWar.append(CustomWar.new(war.player1, war.prize, war.player2_points, war.player1_points, war.start_at, war.end_at, war.player2_unanswered, war.player1_unanswered, war.max_unanswered, war.ended))
        end
        @wars = arrayCustomWar
      else
        @wars = War.all
      end
      render json: @wars
    end
    
    def show
      check_ended_war()
      nilnil = nil
      war = War.where({ended: false})
      war = war.find_by_player1(params[:id])
      if (war == nil)
        war = War.where({ended: false})
        war = war.find_by_player2(params[:id])
      end
      if (war == nil)
      else
      end
      render json: war
    end
    
    def create
      # declaration = Declaration.find params[:id]
      # object = JSON.parse(cookies.encrypted[:data])
      # receiver = Guild.find object["guildId"]
      # sender = Guild.find_by_name(declaration.sender)
      # if receiver["name"] != declaration.receiver
      #   render json: {
      #     error: "you are not in the receiver guild"
      #   }.to_json and return
      # elsif receiver.points < declaration.points || sender.points < declaration.points
      #   declaration.destroy
      #   render json: {
      #     error: "You or the sender dont have enough points, declaration deleted"
      #   }.to_json and return
      # else
      #   sender.points = sender.points - declaration["points"]
      #   receiver.points = receiver.points - declaration["points"]
      #   sender.save
      #   receiver.save
      #   war = War.new(start_at: declaration["start_at"], end_at: declaration["end_at"], prize: declaration["points"] * 2 , player1_points: 0, player2_points: 0, player1: declaration["receiver"], player2: declaration["sender"], player1_unanswered: 0, player2_unanswered: 0, timetable: declaration["timetable"], max_unanswered: declaration["unanswered"])
      #   war.save
      #   declaration.destroy
      #   render json: war.to_json
      # end


      declaration = Declaration.find params[:id]
      object = JSON.parse(cookies.encrypted[:data])
      receiver = Guild.find object["guildId"]
      sender = Guild.find_by_name(declaration.sender)
      if receiver["name"] != declaration.receiver
        render json: {
          error: "you are not in the receiver guild"
        }.to_json and return
      elsif receiver.points < declaration.points || sender.points < declaration.points
        declaration.destroy
        render json: {
          error: "You or the sender dont have enough points, declaration deleted"
        }.to_json and return
      else
        sender.points = sender.points - declaration["points"]
        receiver.points = receiver.points - declaration["points"]
        sender.save
        receiver.save

        false_war = War.where({player1: declaration["receiver"]}).where({ended: false})
        false_war.destroy_all if (false_war != nil)
        false_war = War.where({player2: declaration["receiver"]}).where({ended: false})
        false_war.destroy_all if (false_war != nil)
        false_war = War.where({player1: declaration["sender"]}).where({ended: false})
        false_war.destroy_all if (false_war != nil)
        false_war = War.where({player2: declaration["sender"]}).where({ended: false})
        false_war.destroy_all if (false_war != nil)


        war = War.new(start_at: declaration["start_at"], end_at: declaration["end_at"], prize: declaration["points"] , player1_points: 0, player2_points: 0, player1: declaration["receiver"], player2: declaration["sender"], player1_unanswered: 0, player2_unanswered: 0, timetable: declaration["timetable"], max_unanswered: declaration["unanswered"], ended: false)
        war.save
        declaration.destroy
        render json: war.to_json
      end
    end
    
    def update
      check_ended_war()      
      war = War.find params[:id]
      war.update_attributes war_parameters
      render json: war
    end
    
    def destroy
      check_ended_war()
      object = JSON.parse(cookies.encrypted[:data])
      war = War.find params[:id]
      guild = Guild.find(object["guildId"])
      if ((war.player1 != guild.name && war.player2 != guild.name) || object["guildStatus"] != "owner")
        render json: {
          error: "not allowed"
        }.to_json and return
      end
      if (war.player1 != guild.name)
        guild = Guild.find_by_name(war.player1)
      else
        guild = Guild.find_by_name(war.player2)
      end
      guild.points += war.prize
      guild.save
      war.destroy
      render json: war
    end
    
    private
    
    def war_parameters
      params.permit(:start_at, :end_at, :prize, :player1_points, :player2_points, :player1, :player2,
        :max_unanswered, :player1_unanswered, :player2_unanswered)
      end
      
    def check_ended_war

      @wars = War.where({ended: false})
      @wars.each do |war|
        if (war.end_at < Time.now || war.max_unanswered <= war.player1_unanswered || war.max_unanswered <= war.player2_unanswered)
          war.ended = true
          war.save
          winner_guild = Guild.find_by_name(war.player2) if (war.player1_points <= war.player2_points)
          winner_guild = Guild.find_by_name(war.player1) if (war.player2_points <= war.player1_points)
          winner_guild = Guild.find_by_name(war.player2) if (war.max_unanswered <= war.player1_unanswered)
          winner_guild = Guild.find_by_name(war.player1) if (war.max_unanswered <= war.player2_unanswered)
          new_points = winner_guild.points + (war.prize * 2)
          winner_guild.points = new_points
          winner_guild.save
        end
      end
    end
end