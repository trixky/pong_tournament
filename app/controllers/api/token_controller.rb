class Api::TokenController < ApplicationController
    def index
        if (params[:token] != "undefined")
            data = JSON.parse(cookies.encrypted[:data])
            info = HTTParty.get("https://api.intra.42.fr/v2/me", headers: {
                Authorization:  "Bearer #{params["token"]}"
            })
            if (info["error"])
                render json: {
                    res: "access denied"
                }, status: 200
            else
                render json: {
                    res: "acces granted"
                }, status: 200
            end
        else
            render json: {
                res: "access denied"
            }, status: 200
        end
    end
end