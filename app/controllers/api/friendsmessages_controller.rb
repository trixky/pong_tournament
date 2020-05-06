class Api::FriendsmessagesController < ApplicationController
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
        arrayCustomMessage = Array.new

        @friendsMessages = FriendsMessage.where({recipient_id: object["id"]}).or(FriendsMessage.where({forwarder_id: object["id"]}))
        if @friendsMessages
            @friendsMessages.each do |message|
                @pseudo = User.find(message.forwarder_id).pseudo
                if @pseudo
                    if (message.forwarder_id != object["id"])
                        @fl = FriendsLink.where({first_user_id: object["id"]}).find_by_second_user_id(message.forwarder_id)
                        if (@fl)
                            if (@fl.first_user_mute == nil || @fl.first_user_mute > message.created_at)
                                arrayCustomMessage.append(CustomMessage.new(@pseudo, message.content, message.created_at))
                            end
                        else
                            @fl = FriendsLink.where({first_user_id: message.forwarder_id}).find_by_second_user_id(object["id"])
                            if (@fl.second_user_mute == nil || @fl.second_user_mute > message.created_at)
                                arrayCustomMessage.append(CustomMessage.new(@pseudo, message.content, message.created_at))
                            end
                        end
                    else
                        arrayCustomMessage.append(CustomMessage.new(@pseudo, message.content, message.created_at))
                    end
                end
            end
        end
        respond_with arrayCustomMessage
    end
end