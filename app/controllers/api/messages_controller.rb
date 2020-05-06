class Api::MessagesController < ApplicationController
    respond_to :json

    # ===================================================================== | CUSTOM CLASS |
    # ===================================/
    # =====================/

    class CustomMessage
        def initialize(username, content, date)
            @username = username
            @content = content
            @date = date
        end
    end

    # ===================================================================== | INDEX |
    # ===================================/
    # =====================/

    def index
        request.format = :json
        object = JSON.parse(cookies.encrypted[:data])
        
        nothing = true                      # true = error server / ban user
        arrayCustomMessage = Array.new
        c = User.find(object["id"]).chatrooms.find_by_name(params[:chatroom_name]);
        if (c)
            uc = UsersChatroom.where({user_id: object["id"]}).find_by_chatroom_id(c.id);
            nothing = false if (uc && (uc.ban_date == nil || uc.ban_date < Time.now))
        end
        unless (nothing == true)
            chatroom_id = Chatroom.find_by_name(params[:chatroom_name])
            @messages = Message.all.where({chatrooms_id: chatroom_id}).sort_by {|m| m.created_at }
            @messages.each do |message|
                arrayCustomMessage.append(CustomMessage.new(User.find(message.users_id).pseudo, message.content, message.created_at))
            end
        end
        respond_with arrayCustomMessage
    end
end