class Api::TournamentsController < ApplicationController
    respond_to :json

    class CustomTournament

        def initialize(start_at, end_at, name, prize, object, tournament_id)
  
            @start_at = start_at
            @end_at = end_at
            @name = name
            @prize = prize
            @my_points = UsersTournament.where({tournament_id: tournament_id}).find_by_user_id(object["id"]).level.to_i
            all_inscriptions = UsersTournament.where({tournament_id: tournament_id})
            @my_rank = all_inscriptions.where("level > ?", @my_points).size + 1
            @participants_number = all_inscriptions.size
        end
    
      end

    def index
        check_end_tournament()
        request.format = :json
        
        if (params[:name] != nil)
            sanitize_name = ActiveRecord::Base::sanitize_sql(params[:name])
            @tournaments = Tournament.where("name LIKE :prefix", prefix: "#{sanitize_name}%")
            @tournaments = @tournaments.where("end_at > ?", Time.now)
        elsif (params[:perso] != nil && params[:perso] == "true")
            object = JSON.parse(cookies.encrypted[:data])
            arrayCustomTournament = Array.new
            @tournaments = User.find(object["id"]).tournaments
            @tournaments = @tournaments.where("end_at > ?", Time.now)
            @tournaments.each do |tournament|
                arrayCustomTournament.append(CustomTournament.new(tournament.start_at, tournament.end_at, tournament.name, tournament.prize, object, tournament.id))
            end
            @tournaments = arrayCustomTournament
        elsif (params[:join] != nil && params[:join] == "true")
            object = JSON.parse(cookies.encrypted[:data])
            @persoTournaments = User.find(object["id"]).tournaments
            @tournaments = Tournament.all
            @persoTournaments.each do |tournament|
                @tournaments = @tournaments.where.not(id: tournament.id)
            end
            @tournaments = @tournaments.where("end_at > ?", Time.now)
        end

        respond_with @tournaments
    end
    
    def show
        check_end_tournament()
        request.format = :json
        
        @tournament = Tournament.find_by_name(params[:id])
        
        respond_with @tournament
    end
    
    def update
        check_end_tournament()
        @tournament = Tournament.find_by_name(params[:id])
        @response = "success"
        if (@tournament != nil)
            if (params[:start_registration] != nil) # commenter pour la correction
                if (params[:start_registration] < @tournament.end_registration)
                    @tournament.start_registration = params[:start_registration]
                    @tournament.save
                else
                    @response = "the start of registrations must precede the end of registrations"
                end
            elsif (params[:end_registration] != nil)    # commenter pour la correction
                if (params[:end_registration] < @tournament.start_at && params[:end_registration] > @tournament.start_registration)
                    @tournament.end_registration = params[:end_registration]
                    @tournament.save
                else
                    @response = "the end of registrations must be after the start of registrations and before the start of the tournament"
                end
            elsif (params[:start_at] != nil)    # commenter pour la correction
                if (params[:start_at] < @tournament.end_at && params[:start_at] > @tournament.end_registration)
                    @tournament.start_at = params[:start_at]
                    @tournament.save
                else
                    @response = "the start of the tournament must be after the end of registration and before the end of the tournament"
                end
            elsif (params[:end_at] != nil)  # commenter pour la correction
                if (params[:end_at] > @tournament.start_at)
                    @tournament.end_at = params[:end_at]
                    @tournament.save
                else
                    @response = "the end of the tournament must be after the start of the tournament"
                end
            end
        end

        render json: {res: @response}
    end

    def create
        check_end_tournament()
        @response = "success"
        if (params[:start_registration] != nil &&
            params[:end_registration] != nil &&
            params[:start_at] != nil &&
            params[:end_at] != nil &&
            params[:prize] != nil &&
            params[:name] != nil)
            if (params[:start_registration] > Time.now)
                if (params[:end_registration] > params[:start_registration])
                    if (params[:start_at] > params[:end_registration])
                        if (params[:end_at] > params[:start_at])
                            if (params[:prize].to_i >= 0)
                                if (params[:name] != '')
                                    @tournament = Tournament.find_by_name(params[:name]);
                                    if (@tournament == nil)
                                        @tournament = Tournament.new(start_registration: params[:start_registration],
                                        end_registration: params[:end_registration],
                                        start_at: params[:start_at],
                                        end_at: params[:end_at],
                                        prize: params[:prize],
                                        name: params[:name])
                                        @tournament.save
                                    else
                                        @response = "the tournament name is already taken"
                                    end
                                else
                                    @response = "tournament name cannot be empty"
                                end
                            else
                                @response = "the price must be positive"
                            end
                        else
                            @response = "tournament must end after start"
                        end
                    else
                        @response = "the start of the tournament must begin after the closing of registrations"
                    end
                else
                    @response = "the registration period must end after its start"
                end
            else
                @response = "the registration period must start after the current time"
            end
        end
        render json: {res: @response}
    end

    def destroy
        @tournament = Tournament.find_by_name(params[:id])
        @tournament.destroy if (@tournament)
    end

    # private

    def check_end_tournament
        nilnil = nil
        @ended_tournament = Tournament.where({winner_id: nilnil})
        @ended_tournament.each do |tournament|
            if (tournament.main_tournament != true)
                if (tournament.end_at < Time.now)
                    @inscriptions = UsersTournament.where({tournament_id: tournament.id})
                    max_level = -1
                    max_player_id = nil
                    @inscriptions.each do |inscription|
                        if (inscription.level >= max_level)
                            max_player_id = inscription.user_id
                            max_level = inscription.level
                        end
                    end
                    tournament.winner_id = max_player_id
                    tournament.save
                end
            end
        end
    end
  end