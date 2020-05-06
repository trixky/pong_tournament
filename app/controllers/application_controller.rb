
class ApplicationController < ActionController::Base
    before_action :handle_cookies
    
    def handle_cookies
        if cookies.encrypted[:data] && (request.fullpath !=  "/") && (!request.fullpath.include? "/api/twofactor") &&
(request.fullpath !=  "/twofactor") && (!request.fullpath.include? "/api/oauth") && (!request.fullpath.include? "/api/log") && (!request.fullpath.include? "/api/log")
            object = JSON.parse(cookies.encrypted[:data])
            info = HTTParty.get("https://api.intra.42.fr/v2/me", headers: {
                Authorization:  "Bearer #{object["token"]}"
            })
            user = User.find_by({login: object["login"]})
            if user && user.connected != true
                redirect_to "/acces_denied"
            elsif info["error"] == "Access Denied" && object["login"] != "guest_login"
                cookies.delete :data
                render json: {
                    error: "acces denied"
                }.to_json and return
            else
                if (user && object["pseudo"] && (user.banned == "true") && (!request.fullpath.include? "/banned"))
                    cookies.delete :data
                    render json: {
                        error: "banned"
                    }.to_json and return
                end
            end
        else
            if (!params[:guest] && (!request.fullpath.include? "/acces_denied") && (request.fullpath !=  "/twofactor") && (!request.fullpath.include? "/api/twofactor") && (!request.fullpath.include? "/api/log") && (request.fullpath != "/") && (request.fullpath != "/api/chatrooms.json") && (request.fullpath != "/api/oauth") && (!request.fullpath.include? "connected/create_user") && (!request.fullpath.include? "/api/token") && (!request.fullpath.include? "/api/users"))
                redirect_to "/acces_denied"
            end
        end
    end
end
