class Api::UserschatroomsController < ApplicationController
    respond_to :json
    skip_before_action :verify_authenticity_token

    # ===================================================================== | INDEX |
    # ===================================/
    # =====================/

    def index
        request.format = :json
        object = JSON.parse(cookies.encrypted[:data])
        chatroom = UsersChatroom.where({user_id: object["id"]}).find_by_chatroom_id(Chatroom.find_by_name(params[:chatroom]))
        respond_with chatroom if chatroom
        res = {end: true}.to_json
        render json: res
    end

    # ===================================================================== | CREATE |
    # ===================================/
    # =====================/

    def create
        object = JSON.parse(cookies.encrypted[:data])
        chatroomExist = false

        created = "le chatroom n'existe pas ou votre identifiant est erroné"
        if (Chatroom.exists?(name: params[:chatroom]) && User.exists?(id: object["id"]))
            chatroomExist = true
            created = "vous êtes déjà inscrit"
            if (!UsersChatroom.where({user_id: object["id"]}).exists?({chatroom_id: Chatroom.find_by_name(params[:chatroom]).id}))
                if (Chatroom.find_by_name(params[:chatroom]).private)
                    created = "mauvais password"
                    if (params[:password] && Chatroom.find_by_name(params[:chatroom]).password == params[:password])
                        uc = UsersChatroom.new(user_id: object["id"], chatroom_id: Chatroom.find_by_name(params[:chatroom]).id, admin: false, owner:false)
                        uc.save
                        created = "success"
                    end
                else
                    uc = UsersChatroom.new(user_id: object["id"], chatroom_id: Chatroom.find_by_name(params[:chatroom]).id, admin: false, owner:false)
                    uc.save
                    created = "success"
                end
                created = "l'inscription a echouer" if (created != "success" && Chatroom.find_by_name(params[:chatroom]).public == false)
            end
        end
        res = {created: created}.to_json
        render json: res
    end

    def update
        object = JSON.parse(cookies.encrypted[:data])
        if (!params[:user_id] && object["admin"] != true)
            c = UsersChatroom.where({user_id: object["id"]}).find_by_chatroom_id(Chatroom.find_by_name(params[:id]))
            if (!(c && (c.admin == true || c.owner == true)))
                error = {
                    error: "not allowed"
                }.to_json
                render json: error and return
            else
                u = UsersChatroom.where({user_id: User.find_by_pseudo(params[:pseudo]).id}).find_by_chatroom_id(Chatroom.find_by_name(params[:id]))
                u.admin = params[:admin] if (params[:admin] != nil && c.admin == true && u.id != object["id"])
                u.ban_date = params[:bandate] if (params[:bandate] != nil && !u.admin)
                u.ban_date = nil if (params[:annule_bandate] != nil && !u.admin || u.admin)
                u.save
                if (params[:annule_bandate] != nil || params[:bandate] != nil)
                    is_ban = (params[:annule_bandate] != nil && params[:annule_bandate] == true) ? false : true;
                    someone_need_to_refresh_his_channel_ban(params[:pseudo], params[:id], is_ban)
                end
            end
        else
            uc = UsersChatroom.where({user_id: params[:user_id]}).find_by_chatroom_id(params[:id])
            if (params[:demote])
                if (uc.owner == true)
                    uc.owner = false
                elsif (uc.admin == true)
                    uc.admin = false
                end
            elsif (params[:promote])
                if (uc.admin == true && uc.owner == false)
                    uc.owner = true
                else
                    uc.admin = true
                end
            end
            uc.save
            render json: {
                res: "ok"
            }.to_json and return
        end
        res = {end: true}.to_json
        render json: res
    end

    # ===================================================================== | DESTROY |
    # ===================================/
    # =====================/

    def destroy
        object = JSON.parse(cookies.encrypted[:data])
        
        @c = Chatroom.find_by_name(params[:id])
        if (@c)
            @uc = UsersChatroom.where({user_id: object["id"]}).find_by_chatroom_id(@c.id)
            @uc.destroy if (@uc)
        end
        res = {end: true}.to_json
        render json: res
    end

    def someone_need_to_refresh_his_channel_ban(pseudo, channel_name, is_ban)
        ActionCable.server.broadcast("user_channel_#{pseudo}", {"messageContent": channel_name, "username": "channel-ban", "date": "noDate"}) if (is_ban)
        ActionCable.server.broadcast("user_channel_#{pseudo}", {"messageContent": channel_name, "username": "channel-unban", "date": "noDate"}) unless (is_ban)
    end
end