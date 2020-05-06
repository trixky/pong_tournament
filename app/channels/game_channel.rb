class GameChannel < ApplicationCable::Channel

    def subscribed
        stream_from "game_channel_#{params[:room]}"
        pseudo = (User.find_by({id: current_user_id})).pseudo
        game = Game.find_by(player_1: pseudo, ended: false)
        game = Game.find_by(player_2: pseudo, ended: false) unless game
        object = Rails.cache.fetch(params[:room])
        if object == nil
            object = {}
        end
        object[pseudo] = 1
        if (game && game.player_1 == pseudo)
            object["player_1"] = pseudo
        elsif (game && game.player_2 == pseudo)
            object["player_2"] = pseudo
        end
        Rails.cache.write(params[:room], object)
        if (!game)
            game = Game.find_by(player_1: object["player_1"], player_2: object["player_2"], ended: false)
            if (game && object["started"])
                width = 22.5
                height = 187.5
                ActionCable.server.broadcast("game_channel_#{params[:room]}", {"start": true, "host": game.player_1, "width": width, "height": height, "max_score": 10, "speed": object["speed"], "x_dir": object["x_dir"], 
                "y_dir": object["y_dir"], "p1_x": object["p1_x"], "p1_y": object["p1_y"], "p2_x": object["p2_x"], "p2_y": object["p2_y"], "x": object["x"], y: object["y"], "ball_size": object["ball_size"]})
            else
                ActionCable.server.broadcast("game_channel_#{params[:room]}", {"ended": true})
            end
        elsif (object[game.player_1] == 1 && object[game.player_2] == 1 && object["started"] != true)
            object["started"] = true
            Rails.cache.write(params[:room], object)
            object["speed"] = 4
            object["p1_y"] = 281.25
            object["p1_x"] = 7.5
            object["p2_x"] = 720
            object["p2_y"] = 281.25
            width = 22.5
            height = 187.5
            object["y_dir"] = (rand() * object["speed"]) * (rand() > 0.5 ? -1 : 1) * 0.65
            object["x_dir"] = (object["speed"]- object["y_dir"].abs) * (rand() > 0.5 ? -1 : 1)
            object["x"] = 375
            object["y"] = 375
            object["ball_size"] = 10
            object["p1_up"] = 0
            object["p1_down"] = 0
            object["p2_up"] = 0
            object["p2_down"] = 0
            object["score_p1"] = 0
            object["score_p2"] = 0
            ActionCable.server.broadcast("game_channel_#{params[:room]}", {"start": true, "host": game.player_1, "width": width, "height": height, "max_score": 10, "speed": object["speed"], "x_dir": object["x_dir"], 
            "y_dir": object["y_dir"], "p1_x": object["p1_x"], "p1_y": object["p1_y"], "p2_x": object["p2_x"], "p2_y": object["p2_y"], "x": object["x"], y: object["y"], "ball_size": object["ball_size"]})
            Rails.cache.write params[:room], object
            object["trh"] = Thread.new {
                ActionCable.server.broadcast("game_channel_#{params[:room]}", {"3": true})
                sleep 1
                ActionCable.server.broadcast("game_channel_#{params[:room]}", {"2": true})
                sleep 1
                ActionCable.server.broadcast("game_channel_#{params[:room]}", {"1": true})
                sleep 1
                ActionCable.server.broadcast("game_channel_#{params[:room]}", {"go": true, "player_1": game.player_1, "player_2": game.player_2, "score_p1": object["score_p1"], "score_p2": object["score_p2"]})
                loop do
                    object = Rails.cache.fetch(params[:room])
                    kill = Rails.cache.fetch(params[:room] + "_kill")
                    if (kill && kill["kill"] == true)
                        game.ended = true
                        game.save
                        kill = {}
                        kill = params[:room] + "_kill"
                        Rails.cache.write kill, kill
                        object = {}
                        Rails.cache.write params[:room], object
                        Thread.exit
                    end
                    if (object["p1_down"])
                        object["p1_y"] -= 3.75
                    elsif (object["p1_up"])
                        object["p1_y"] += 3.75
                    end
                    if (object["p2_down"])
                        object["p2_y"] -= 3.75
                    elsif (object["p2_up"])
                        object["p2_y"] += 3.75
                    end
                    if ((object["y"] > object["p1_y"]) && (object["y"] < object["p1_y"] + height) && (object["x"] > object["p1_x"] + width) && (object["x"] + object["x_dir"] <= object["p1_x"] + width))
                        middle = object["p1_y"] + height / 2
                        object["y_dir"] = (object["y"] - middle) / (height / 2) * (object["speed"] * 0.65)
                        object["x_dir"] = Math.sqrt((object["speed"] ** 2) - (object["y_dir"] ** 2))
                    elsif ((object["y"] > object["p2_y"] && (object["y"]  < object["p2_y"] + height) && object["x"] < object["p2_x"]) && (object["x"] + object["x_dir"] >= object["p2_x"]))
                        middle = object["p2_y"] + height / 2
                        object["y_dir"] = (object["y"] - middle) / (height / 2) * (object["speed"] * 0.65)
                        object["x_dir"] = Math.sqrt((object["speed"] ** 2) - (object["y_dir"] ** 2)) * -1
                    elsif object["y"] - (object["ball_size"]) > 0 && object["y"]- (object["ball_size"]) + object["y_dir"] < 0
                        object["y_dir"] *= -1
                    elsif object["y"] + (object["ball_size"]) < 750 && object["y"] + (object["ball_size"]) + object["y_dir"] > 750
                        object["y_dir"] *= -1
                    elsif object["x"] - (object["ball_size"]) < -100
                        x = object["x"]
                        y = object["y"]
                        object["p1_y"] = 281.25
                        object["p1_x"] = 7.5
                        object["p2_x"] = 720
                        object["p2_y"] = 281.25
                        object["x"] = 375
                        object["y"] = 375
                        object["y_dir"] = (rand() * object["speed"]) * (rand() > 0.5 ? -1 : 1) * 0.65
                        object["x_dir"] = (object["speed"]- object["y_dir"].abs) * (rand() > 0.5 ? -1 : 1)
                        object["score_p2"] += 1
                        game.score_p2 += 1
                        game.save
                        if (game.score_p2 < 10)
                            ActionCable.server.broadcast("game_channel_#{params[:room]}", {"goal": "p2", "p2_y": object["p2_y"], "p1_y": object["p1_y"],"x": object["x"], "y": object["y"], "x_dir": object["x_dir"], "y_dir": object["y_dir"], "speed": object["speed"], "past_x": x, "past_y": y,"p1_x":  object["p1_x"], "p1_y": object["p1_y"], "p2_x":  object["p2_x"], "p2_y": object["p2_y"]})
                            ActionCable.server.broadcast("game_channel_#{params[:room]}", {"3": true})
                            sleep 1
                            ActionCable.server.broadcast("game_channel_#{params[:room]}", {"2": true})
                            sleep 1
                            ActionCable.server.broadcast("game_channel_#{params[:room]}", {"1": true})
                            sleep 1
                            ActionCable.server.broadcast("game_channel_#{params[:room]}", {"go": true, "player_1": game.player_1, "player_2": game.player_2, "score_p1": object["score_p1"], "score_p2": object["score_p2"]})
                        end
                    elsif object["x"] - (object["ball_size"])> 750 + 100
                        x = object["x"]
                        y = object["y"]
                        object["x"] = 375
                        object["y"] = 375
                        object["p1_y"] = 281.25
                        object["p1_x"] = 7.5
                        object["p2_x"] = 720
                        object["p2_y"] = 281.25
                        object["y_dir"] = (rand() * object["speed"]) * (rand() > 0.5 ? -1 : 1) * 0.65
                        object["x_dir"] = (object["speed"]- object["y_dir"].abs) * (rand() > 0.5 ? -1 : 1)
                        object["score_p1"] += 1
                        game.score_p1 += 1
                        game.save
                        if game.score_p1 < 10
                            ActionCable.server.broadcast("game_channel_#{params[:room]}", {"goal": "p1","p2_y": object["p2_y"], "p1_y": object["p1_y"], "x": object["x"], "y": object["y"], "x_dir": object["x_dir"], "y_dir": object["y_dir"], "speed": object["speed"], "past_x": x, "past_y": y,
                            "p1_x":  object["p1_x"], "p1_y": object["p1_y"], "p2_x":  object["p2_x"], "p2_y": object["p2_y"]})
                            ActionCable.server.broadcast("game_channel_#{params[:room]}", {"3": true})
                            sleep 1
                            ActionCable.server.broadcast("game_channel_#{params[:room]}", {"2": true})
                            sleep 1
                            ActionCable.server.broadcast("game_channel_#{params[:room]}", {"1": true})
                            sleep 1
                            ActionCable.server.broadcast("game_channel_#{params[:room]}", {"go": true, "player_1": game.player_1, "player_2": game.player_2, "score_p1": object["score_p1"], "score_p2": object["score_p2"]})
                        end
                    else
                        object["x"] += object["x_dir"]
                        object["y"] += object["y_dir"]
                    end
                    if (object["score_p1"] == 10 || object["score_p2"] == 10)
                        game = Game.find_by(player_1: object["player_1"], player_2: object["player_2"], ended: false)
                        game.score_p1 = object["score_p1"]
                        game.score_p2 = object["score_p2"]
                        game.save
                        if (object["score_p1"] == 10)
                            game.winner = game.player_1
                        else
                            game.winner = game.player_2
                        end
                        if (game.game_type == "main-classed")
                            id_1 = User.find_by({pseudo: game.player_1}).id
                            id_2 = User.find_by({pseudo: game.player_2}).id
                            u_t1 = UsersTournament.find_by({tournament_id: 1, user_id: id_1})
                            u_t2 = UsersTournament.find_by({tournament_id: 1, user_id: id_2})
                            if (game.winner == game.player_1 && u_t1.level > u_t2.level)
                                temp = u_t1.level
                                u_t1.level = u_t2.level
                                u_t2.level = temp
                            elsif (game.winner == game.player_2 && u_t2.level > u_t1.level)
                                temp = u_t2.level
                                u_t2.level = u_t1.level
                                u_t1.level = temp
                            end
                            u_t1.save
                            u_t2.save
                        elsif (game.game_type == "guild")
                            u1 = User.find_by({pseudo: game.player_1})
                            u2 = User.find_by({pseudo: game.player_2})
                            gid_1 = u1.guild_id
                            gid_2 = u2.guild_id
                            g_1 = Guild.find gid_1
                            g_2 = Guild.find gid_2
                            w = War.find_by({player1: g_1.name, player2: g_2.name, ended: false})
                            w = War.find_by({player1: g_2.name, player2: g_1.name, ended: false}) unless w 
                            if (game.winner == u1.pseudo)
                                if (g_1.name == w.player1)
                                    w.player1_points += 1
                                else
                                    w.player2_points += 1
                                end
                            else
                                if (g_2.name == w.player1)
                                    w.player1_points += 1
                                else
                                    w.player2_points += 1
                                end
                            end
                            w.save
                        elsif game.game_type == "perso-classed"
                            u = User.find_by({pseudo: game.winner})
                            u_t = UsersTournament.find_by({tournament_id: game.tournament_id, user_id: u.id})
                            u_t.level += 1
                            u_t.save
                        end
                        game.save
                        object = {}
                        ActionCable.server.broadcast("game_channel_#{params[:room]}", {"end_game": true})
                        Rails.cache.write params[:room], object
                        Thread.exit
                    end
                Rails.cache.write params[:room], object
                sleep 0.005
            end
        }
        end
    end

    def receive(data)
        pseudo = (User.find_by({id: current_user_id})).pseudo
        game = Game.find_by(player_1: pseudo, ended: false)
        game = Game.find_by(player_2: pseudo, ended: false) unless game
        object = Rails.cache.fetch(params[:room])
        if (pseudo == game.player_1 || pseudo == game.player_2)
            if (data["rebound"])
                object["x_dir"] = data["x_dir"]
                object["y_dir"] = data["y_dir"]
                object["x"] = data["x"]
                object["y"] = data["y"]
                ActionCable.server.broadcast("game_channel_#{params[:room]}", {"rebound": true, "pseudo": pseudo, "x_dir": object["x_dir"], "y_dir": object["y_dir"], "x": object["x"], "y": object["y"]})
            elsif (pseudo == game.player_1)
                if data["move_up"]
                    object["p1_up"] = data["up"]
                    ActionCable.server.broadcast("game_channel_#{params[:room]}", {"move_up": pseudo, "up": data["up"]})
                elsif data["move_down"]
                    object["p1_down"] = data["down"]
                    ActionCable.server.broadcast("game_channel_#{params[:room]}", {"move_down": pseudo, "down": data["down"]})
                elsif (data["ball"] && data["ball"] == "reset")
                    ActionCable.server.broadcast("game_channel_#{params[:room]}", {"ball": "reset", "x": data["x"], y: data["y"], score: data["score"]})
                    if (data["score"] == "p1")
                        object["score_p1"] += 1
                        game.score_p1 += 1
                    elsif (data["score"] == "p2")
                        object["score_p2"] += 1
                        game.score_p2 += 1
                    end
                    game.save
                elsif (data["start"])
                    ActionCable.server.broadcast("game_channel_#{params[:room]}", {"start": true})
                end
            else
                if data["move_up"]
                    object["p2_up"] = data["up"]
                    ActionCable.server.broadcast("game_channel_#{params[:room]}", {"move_up": pseudo, "up": data["up"]})
                elsif data["move_down"]
                    object["p2_down"] = data["down"]
                    ActionCable.server.broadcast("game_channel_#{params[:room]}", {"move_down": pseudo, "down": data["down"]})
                end
            end
            Rails.cache.write params[:room], object
        end
    end

    def unsubscribed
        pseudo = (User.find_by({id: current_user_id})).pseudo
        game = Game.find_by(player_1: pseudo, ended: false)
        game = Game.find_by(player_2: pseudo, ended: false) unless game
        object = Rails.cache.fetch(params[:room])
        if (game && (pseudo == game.player_1 || pseudo == game.player_2) && object["score_p1"] != 10 && object["score_p2"] != 10 && object[game.player_1] == 1 && object[game.player_2] == 1)
            object[pseudo] = 0
            Rails.cache.write params[:room], object
            game.ended = true
            game.score_p1 = object["score_p1"]
            game.score_p2 = object["score_p2"]
            if (pseudo == game.player_1)
                game.winner = game.player_2
            else
                game.winner = game.player_1 
            end
            game.save
            ActionCable.server.broadcast("game_channel_#{params[:room]}", {"forfait": pseudo})
            if (game.game_type == "main-classed")
                id_1 = User.find_by({pseudo: game.player_1}).id
                id_2 = User.find_by({pseudo: game.player_2}).id
                u_t1 = UsersTournament.find_by({tournament_id: 1, user_id: id_1})
                u_t2 = UsersTournament.find_by({tournament_id: 1, user_id: id_2})
                if (game.winner == game.player_1 && u_t1.level > u_t2.level)
                    temp = u_t1.level
                    u_t1.level = u_t2.level
                    u_t2.level = temp
                elsif (game.winner == game.player_2 && u_t2.level > u_t1.level)
                    temp = u_t2.level
                    u_t2.level = u_t1.level
                    u_t1.level = temp
                end
                u_t1.save
                u_t2.save
            elsif (game.game_type == "guild")
                u1 = User.find_by({pseudo: game.player_1})
                u2 = User.find_by({pseudo: game.player_2})
                gid_1 = u1.guild_id
                gid_2 = u2.guild_id
                g_1 = Guild.find gid_1
                g_2 = Guild.find gid_2
                w = War.find_by({player1: g_1.name, player2: g_2.name, ended: false})
                w = War.find_by({player1: g_2.name, player2: g_1.name, ended: false}) unless w 
                if (game.winner == u1.pseudo)
                    if (g_1.name == w.player1)
                        w.player1_points += 1
                    else
                        w.player2_points += 1
                    end
                else
                    if (g_2.name == w.player1)
                        w.player1_points += 1
                    else
                        w.player2_points += 1
                    end
                end
                w.save
            elsif game.game_type == "perso-classed"
                u = User.find_by({pseudo: game.winner})
                u_t = UsersTournament.find_by({tournament_id: game.tournament_id, user_id: u.id})
                u_t.level += 1
                u_t.save
            end
            kil_obj = {}
            kil_obj["kill"] = true
            kill = params[:room] + "_kill"
            Rails.cache.write kill, kil_obj
        end
        Rails.cache.write params[:room], object
        if (game && (pseudo == game.player_1 || pseudo == game.player_2) && object["kill"] != true)
            object = {}
            Rails.cache.write params[:room], object
        end
    end

end