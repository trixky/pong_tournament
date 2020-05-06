require("json")

class Api::LogController < ApplicationController
    respond_to :json
    skip_before_action :verify_authenticity_token

    def index
        if params[:disconnect]
            data = JSON.parse(cookies.encrypted[:data])
            user = User.find_by_login(data["login"])
            if (!user)
                redirect_to "/banned" and return
            end
            user.connected = false
            user.save
            res = {
                data: "user disconnected"
            }.to_json
            cookies.delete :data
            render json: res and return
        elsif params[:guest]
            user = User.find_by_login("guest_login")
            object = user.attributes
            cookies.encrypted[:data] = 
            {
                login: "guest_login",
                pseudo: "guest_pseudo",
                id: object["id"],
                guildId: object["guild_id"],
                admin: object["admin"],
                guildStatus: object["guildStatus"]
            }.to_json
            user.connected = true
            user.save
            redirect_to "/connected/play" and return
        end
        uid = 'ed6f5195a198f675c62a59a9f654f05c52942eb69d88187ad8251ec32cf34b4d'
        secret = 'd03d5b6a1728bb6d92e62c13e3ffcd4048aa56b63bbb823ed17e9136baa10b21'
        code = params[:code]
        token = JSON.parse(HTTParty.post("https://api.intra.42.fr/oauth/token", body: {
                client_id:  uid,
                grant_type:  'authorization_code',
                client_secret: secret,
                code: code,
                redirect_uri:"http://127.0.0.1:3000/api/log",
            }
        ).body)
        info = JSON.parse(HTTParty.get("https://api.intra.42.fr/v2/me", headers: {
            Authorization:  "Bearer #{token["access_token"]}"
        }).body)
        user = User.find_by_login(info["login"])
        if (user)
            object = user.attributes
        else
            object = {}
        end
        begin
            img = url_for(user.avatar_pers)
        rescue
            img = ""
        end
        cookies.encrypted[:data] = 
        {
            login: info["login"],
            token: token["access_token"],
            refresh_token: token["refresh_token"],
            expires_in: token["expires_in"],
            pseudo: object["pseudo"],
            id: object["id"],
            url: img,
            guildId: object["guild_id"],
            admin: object["admin"],
            guildStatus: object["guildStatus"]
        }.to_json
        if user == nil
            redirect_to "/connected/create_user?login=#{info["login"]}"
        elsif user.two_factor == true
            redirect_to "/twofactor"
        elsif user.banned == "true"
            redirect_to "/banned"
        else
            user.connected = true
            user.save
            redirect_to "/connected/play?pseudo=#{user["pseudo"]}"
        end
    end
end