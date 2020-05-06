class Api::OauthController < ApplicationController
    def index
        if params["guest"]
            redirect_to "http://127.0.0.1:3000/api/log?guest=true"
        else
            uid = 'ed6f5195a198f675c62a59a9f654f05c52942eb69d88187ad8251ec32cf34b4d'
            redirect_to "https://api.intra.42.fr/oauth/authorize?client_id=#{uid}&redirect_uri=http://127.0.0.1:3000/api/log&response_type=code"
        end
    end
end