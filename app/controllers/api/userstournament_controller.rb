class Api::UserstournamentController < ApplicationController
    respond_to :json
    
    def update
    end

    def create
        if (params[:tournament_name] != nil)
            object = JSON.parse(cookies.encrypted[:data])
            @tournament = Tournament.find_by_name(params[:tournament_name])
            if (@tournament != nil)
                @userTournament = UsersTournament.where({user_id: object["id"]}).find_by_tournament_id(@tournament.id)
                if (@userTournament == nil)
                    UsersTournament.create(user_id: object["id"], tournament_id: @tournament.id, level: 0)
                end
            end
        end
    end

    def destroy
        object = JSON.parse(cookies.encrypted[:data])
        @tournament = Tournament.find_by_name(params[:id])
        if (@tournament != nil)
            @userTournament = UsersTournament.where({user_id: object["id"]}).find_by_tournament_id(@tournament.id)
            @userTournament.destroy unless (@userTournament == nil)
        end
    end
  end