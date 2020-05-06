class Api::MatchsController < ApplicationController
    respond_to :json

    # ===================================================================== | INDEX |
    # ===================================/
    # =====================/

    class CustomGame
        def initialize(winner, my_pseudo, enemy_pseudo, my_score, enemy_score, my_guild, enemy_guild, tournament_name)
          @i_win = (winner == my_pseudo) ? true : false;
          @enemy_pseudo = enemy_pseudo
          @my_score = my_score.to_i
          @enemy_score = enemy_score.to_i
          @my_guild = my_guild
          @enemy_guild = enemy_guild
          @tournament_name = tournament_name
        end
      end

    def index
        object = JSON.parse(cookies.encrypted[:data])
        arrayCustomGame = Array.new 
        
        if (params[:pseudo] != nil)
            @u = User.find(object["id"])
            if (@u)
                @games = Game.where({player_1: @u.pseudo}).or(Game.where({player_2: @u.pseudo})).where({ended: true})
                @games.each do |game|
                    @tournament = Tournament.find(game.tournament_id) unless (game.tournament_id == nil)
                    @tournament_name = @tournament.name if @tournament
                    if (game.player_1 == @u.pseudo)
                        arrayCustomGame.append(CustomGame.new(game.winner, game.player_1, game.player_2, game.score_p1, game.score_p2, game.guild_p1, game.guild_p2, @tournament_name))
                    else
                        arrayCustomGame.append(CustomGame.new(game.winner, game.player_2, game.player_1, game.score_p2, game.score_p1, game.guild_p2, game.guild_p1, @tournament_name))
                    end
                end
            end
        end
        respond_with arrayCustomGame
    end
end
