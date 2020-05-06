module Token
    def token_valididy
        data = cookies.encrypted[:data]
        puts "\n\n====\n\n"
        puts data
        puts "\n\n====\n\n"
        # token = JSON.parse(HTTParty.post("https://api.intra.42.fr/oauth/token", body: {
        #         client_id:  uid,
        #         grant_type:  'authorization_code',
        #         client_secret: secret,
        #         code: code,
        #         redirect_uri:"http://127.0.0.1:3000/api/log",
        #     }
        # ).body)
    end
end