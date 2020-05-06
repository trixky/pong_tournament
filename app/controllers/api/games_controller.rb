class Api::GamesController < ApplicationController

    def show
        if (params["user_pseudo"])
            game = Game.where({player_1: params["user_pseudo"],ended: false})
            game = Game.where({player_2: params["user_pseudo"],ended: false}) unless game.size != 0
            res = {}
            if game.size == 0
                res["game"] = false
            else
                res["game"] = true
                res["id"] = game[0].id
            end
            render json: res
        else
            data = JSON.parse(cookies.encrypted[:data])
            game = Game.find_by_id(params[:id])
            render json: game
        end
    end
end