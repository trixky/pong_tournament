class Api::BattlesController < ApplicationController
    respond_to :json
  
    #   first_entity_id             | user      | user          | guild |
    #   second_entity_id            | user      | user          | guild |
    #   third_entity_id             | nothing   | nothing       | user  |
    #   type_battle                 | casual    | tournament    | guild |

  
    def index
        request.format = :json
        object = JSON.parse(cookies.encrypted[:data])
        arrayCustomBattle = Array.new
        respond_with arrayCustomBattle
    end
  
    def create
        object = JSON.parse(cookies.encrypted[:data])
    
        if (params[:type_battle])
            if (params[:type_battle] == 'casual' && params[:pseudo])
                @me = User.find(object["id"])
                @him = User.find_by_pseudo(params[:pseudo])
                if (@me && @him)
                    # @br = BattlesRequest.find_by(first_entity_id: @me.id, second_entity_id: @him.id, type_battle: 'casual')
                    @br = BattlesRequest.where({first_entity_id: @me.id}).where({second_entity_id: @him.id}).find_by_type_battle('casual')
                    # @br = BattlesRequest.find_by(first_entity_id: @him.id, second_entity_id: @me.id, type_battle: 'casual') unless @br
                    @br = BattlesRequest.where({first_entity_id: @him.id}).where({second_entity_id: @me.id}).find_by_type_battle('casual') unless @br
                    unless (@br)
                        BattlesRequest.create(first_entity_id: @me.id, second_entity_id: @him.id, type_battle: 'casual')
                        someone_need_to_refresh_his_notification(@him.pseudo)
                    end
                end
            elsif (params[:type_battle] == 'main-classed')
                create_main_classed(object)
            elsif (params[:type_battle] == 'main-unclassed')
                create_main_unclassed(object)
            elsif (params[:type_battle] == 'perso-classed')
                create_perso_classed(object, params[:tournament_name]) if (params[:tournament_name] != nil)
            elsif (params[:type_battle] == 'guild')
                @possible = false;
                create_guild(object)
                render json: {
                    possible: @possible
                }.to_json and return
            end
        end
    end
    
    def update
        object = JSON.parse(cookies.encrypted[:data])
        
        @me = User.find(object["id"])
        @him = User.find_by_pseudo(params[:id])
        if (@me && @him && @me.connected == true && @him.connected == true)
            # @battle = BattlesRequest.find_by(first_entity_id: @me.id, second_entity_id: @him.id)
            @battle = BattlesRequest.where({first_entity_id: @me.id}).find_by_second_entity_id(@him.id)
            # @battle = BattlesRequest.find_by(first_entity_id: @him.id, second_entity_id: @me.id) unless @battle
            @battle = BattlesRequest.where({first_entity_id: @him.id}).find_by_second_entity_id(@me.id) unless @battle
            if (@battle)
                game = Game.create(player_1: @me.pseudo, player_2: @him.pseudo, score_p1: 0, score_p2: 0, ended: false, game_type: @battle.type_battle)
                send_battle_start_notification(@me.pseudo, @him.pseudo, game.id)
                @battle.destroy
                render json: {
                    game_id: game.id
                } and return
            end
        elsif (@me.connected != true || @him.connected != true)
            # @battle = BattlesRequest.find_by(first_entity_id: @me.id, second_entity_id: @him.id)
            @battle = BattlesRequest.where({first_entity_id: @me.id}).find_by_second_entity_id(@him.id)
            # @battle = BattlesRequest.find_by(first_entity_id: @him.id, second_entity_id: @me.id) unless @battle
            @battle = BattlesRequest.where({first_entity_id: @him.id}).find_by_second_entity_id(@me.id) unless @battle
            @battle.destroy
            render json: {
                error: "user disconnected"
            }.to_json and return
        end
    end
    
    def destroy
        object = JSON.parse(cookies.encrypted[:data])
        
        if (params[:type_battle] && params[:id])
            if (params[:type_battle] == 'casual')
                @me = User.find(object["id"])
                @him = User.find_by(pseudo: params[:id])
                if (@me && @him)
                    # @br = BattlesRequest.find_by(first_entity_id: @me.id, second_entity_id: @him.id, type_battle: 'casual')
                    @br = BattlesRequest.where({first_entity_id: @me.id}).where({second_entity_id: @him.id}).find_by_type_battle('casual')
                    # @br = BattlesRequest.find_by(first_entity_id: @him.id, second_entity_id: @me.id, type_battle: 'casual') unless @br
                    @br = BattlesRequest.where({first_entity_id: @him.id}).where({second_entity_id: @me.id}).find_by_type_battle('casual') unless @br
                    if (@br)
                        @br.destroy 
                        someone_need_to_refresh_his_notification(@him.pseudo)
                    end
                end
            elsif (params[:type_battle] == 'tournament')
                @me = User.find(object["id"])
                @battlesRequest = BattlesRequest.where({first_entity_id: @me.id}).where({type_battle: 'main-classed'})
                @battlesRequest.destroy_all if (@battlesRequest)
                @battlesRequest = BattlesRequest.where({first_entity_id: @me.id}).where({type_battle: 'main-unclassed'})
                @battlesRequest.destroy_all if (@battlesRequest)
                @battlesRequest = BattlesRequest.where({first_entity_id: @me.id}).where({type_battle: 'perso-classed'})
                @battlesRequest.destroy_all if (@battlesRequest)
                @battlesRequest = BattlesRequest.where({first_entity_id: @me.id}).find_by_type_battle('guild')
                if (@battlesRequest)
                    if (@battlesRequest.created_at + 13 < Time.now)
                        @adverse_guild = Guild.find(@battlesRequest.second_entity_id)
                        if (@adverse_guild != nil)
                            war = War.where(ended: false).find_by_player1(@adverse_guild.name)
                            if (war != nil)
                                war.player1_unanswered = war.player1_unanswered + 1
                            else
                                war = War.where(ended: false).find_by_player2(@adverse_guild.name)
                                war.player2_unanswered = war.player2_unanswered + 1
                            end
                            war.save
                            check_ended_war()
                        end
                    else
                        puts "..."
                    end
                    @battlesRequest.destroy
                end
            elsif (params[:type_battle] == 'guild')
                # ----------------
            end
        end
    end
  
    private

    def create_main_classed(object)
        @find = false
        @main_tournament = Tournament.find_by_main_tournament(true)
        @me = User.find(object["id"])
        @my_registration = UsersTournament.where({user_id: @me.id}).find_by_tournament_id(@main_tournament.id)
        if (@my_registration != nil)
            @my_level = @my_registration.level.to_i
            
            @battlesRequest = BattlesRequest.where({type_battle: "main-classed"})
            @battlesRequest.each do |battleRequest|
                @him = User.find(battleRequest.first_entity_id);
                @his_registration = UsersTournament.where({user_id: @him.id}).find_by_tournament_id(@main_tournament.id)
                if (@his_registration != nil)
                    @his_level = @his_registration.level.to_i
                    if (@his_level == @my_level - 1 || @his_level == @my_level + 1)
                        game = Game.create(player_1: @me.pseudo, player_2: @him.pseudo, score_p1: 0, score_p2: 0, ended: false, game_type: "main-classed", tournament_id: @main_tournament.id)
                        send_battle_start_notification(@me.pseudo, @him.pseudo, game.id)
                        battleRequest.destroy
                        @find = true;
                        break;
                    end
                end
            end
            unless (@find == true)
                BattlesRequest.create(first_entity_id: @me.id, type_battle: 'main-classed')
            end
        end
    end

    def create_main_unclassed(object)
        @find = false
        @main_tournament = Tournament.find_by_main_tournament(true)
        @me = User.find(object["id"])
        @my_registration = UsersTournament.where({user_id: @me.id}).find_by_tournament_id(@main_tournament.id)

        if (@my_registration != nil)
            @my_level = @my_registration.level.to_i
            
            @battlesRequest = BattlesRequest.where({type_battle: "main-unclassed"})
            @battlesRequest.each do |battleRequest|
                @him = User.find(battleRequest.first_entity_id);
                @his_registration = UsersTournament.where({user_id: @him.id}).find_by_tournament_id(@main_tournament.id)
                if (@his_registration != nil)
                    @his_level = @his_registration.level.to_i
                    if (@his_level == @my_level - 1 || @his_level == @my_level + 1)
                        game = Game.create(player_1: @me.pseudo, player_2: @him.pseudo, score_p1: 0, score_p2: 0, ended: false, game_type: "main-unclassed", tournament_id: @main_tournament.id)
                        send_battle_start_notification(@me.pseudo, @him.pseudo, game.id)
                        battleRequest.destroy
                        @find = true;
                        break;
                    end
                end
            end
            unless (@find == true)
                BattlesRequest.create(first_entity_id: @me.id, type_battle: 'main-unclassed')
            end
        end
    end

    def create_perso_classed(object, tournament_name)
        @tournament = Tournament.find_by_name(tournament_name)
        if (@tournament != nil)
            @me = User.find(object["id"])
            @my_level = UsersTournament.where({user_id: @me.id}).find_by_tournament_id(@tournament.id).level.to_i
            @battleRequest = BattlesRequest.where({type_battle: "perso-classed"}).find_by_second_entity_id(@tournament.id)
            if (@battleRequest != nil)
                @him = User.find(@battleRequest.first_entity_id);
                game = Game.create(player_1: @me.pseudo, player_2: @him.pseudo, score_p1: 0, score_p2: 0, ended: false, game_type: "perso-classed", tournament_id: @tournament.id)
                send_battle_start_notification(@me.pseudo, @him.pseudo, game.id)
                @battleRequest.destroy
            else
                BattlesRequest.create(first_entity_id: @me.id, second_entity_id: @tournament.id, type_battle: 'perso-classed')
            end
        end
    end

    def create_guild(object)
        @me = User.find(object["id"])
        @my_guild = Guild.find(@me.guild_id);
        if (@my_guild != nil)
            @war = War.find_by_player1(@my_guild.name)
            if (@war != nil)
                @adverse_guild_name = @war.player2
            else
                @war = War.find_by_player2(@my_guild.name)
                @adverse_guild_name = @war.player1 if (@war != nil)
            end

            @in_battle_period = false
            @time_now = Time.now
            @war.timetable.each do |periode|
                first_split = periode.split('/') 
                @first_month = first_split[0]
                @first_day = first_split[1].split(' ')[0]
                second_split = periode.split('- ')[1].split('/')
                @second_month = second_split[0]
                @second_day = second_split[1].split(' ')[0]
                @year = Time.now.year

                @first_time = Time.new(@year, @first_month, @first_day)
                @second_time = Time.new(@year, @second_month, @second_day)
                if (@time_now >= @first_time && @time_now < @second_time)
                    @in_battle_period = true
                end
            end
            if (@in_battle_period == true)
                if (@adverse_guild_name != nil)
                    @adverse_guild_id = Guild.find_by_name(@adverse_guild_name).id
                    if (@adverse_guild_id != nil)
                        @battleRequest = BattlesRequest.where({type_battle: "guild"}).find_by_second_entity_id(@me.guild_id)
                        if (@battleRequest != nil)
                            @him = User.find(@battleRequest.first_entity_id);
                            game = Game.create(player_1: @me.pseudo, player_2: @him.pseudo, score_p1: 0, score_p2: 0, ended: false, game_type: "guild")
                            send_battle_start_notification(@me.pseudo, @him.pseudo, game.id)
                            @battleRequest.destroy
                            @possible = true
                        else
                            @battleRequest = BattlesRequest.where({type_battle: "guild"}).find_by_second_entity_id(@adverse_guild_id)
                            if (@battleRequest == nil)
                                BattlesRequest.create(first_entity_id: @me.id, second_entity_id: @adverse_guild_id, type_battle: 'guild')
                                @possible = true
                                notification_guild_battle(@adverse_guild_id)
                            end
                        end
                    end
                end
            end
        end
    end

    def notification_guild_battle(guild_id)
        adverse_guys = User.where({guild_id: guild_id})
        adverse_guys.each do |guy|
            ActionCable.server.broadcast("user_channel_#{guy.pseudo}", {"messageContent": "guild-battle", "username": "notification", "date": "noDate"})
        end
    end

    def someone_need_to_refresh_his_notification(pseudo)
        ActionCable.server.broadcast("user_channel_#{pseudo}", {"messageContent": "refresh", "username": "notification", "date": "noDate"})
    end
    
    def send_battle_start_notification(first_pseudo, second_pseudo, battle_id)
        ActionCable.server.broadcast("user_channel_#{first_pseudo}", {"messageContent": "battle-start", "username": "notification", "date": "noDate", "enemy": second_pseudo, "battle_id": battle_id})
        ActionCable.server.broadcast("user_channel_#{second_pseudo}", {"messageContent": "battle-start", "username": "notification", "date": "noDate", "enemy": first_pseudo, "battle_id": battle_id})
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