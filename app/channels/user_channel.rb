class UserChannel < ApplicationCable::Channel

    def subscribed
        stream_from "user_channel_#{params[:room]}"
        
        reject if (!User.where({id: current_user_id}).exists?)    # utilisateur existant
        @me = User.find(current_user_id)
        if (@me)
            @me.onsite = true
            @me.save
            prevent_my_status(true, @me.pseudo)
        end 
    end

    def receive(data)
        if (data["messageContent"] != nil && data["messageContent"].length > 0)
            @recipient = User.find_by_pseudo(data["recipient"])
            if (@recipient)
                message = FriendsMessage.new(content: data["messageContent"], forwarder_id: current_user_id, recipient_id: @recipient.id)
                message.save
                ActionCable.server.broadcast("user_channel_#{params[:room]}", {"username": "personnal-chat" ,"messageContent": message.content, "forwarder": User.find(current_user_id).pseudo, "date": message.created_at})

                @fl = FriendsLink.where({first_user_id: current_user_id}).find_by_second_user_id(@recipient.id)
                if (@fl)
                    if (@fl.second_user_mute == nil)
                        ActionCable.server.broadcast("user_channel_#{@recipient.pseudo}", {"username": "personnal-chat" ,"messageContent": message.content, "forwarder": User.find(current_user_id).pseudo, "date": message.created_at})
                    end
                else
                    @fl = FriendsLink.where(first_user_id: @recipient.id).find_by_second_user_id(current_user_id)
                    if (@fl.first_user_mute == nil)
                        ActionCable.server.broadcast("user_channel_#{@recipient.pseudo}", {"username": "personnal-chat" ,"messageContent": message.content, "forwarder": User.find(current_user_id).pseudo, "date": message.created_at})
                    end
                end
            end
        end
    end
    
    def unsubscribed
        @me = User.find(current_user_id)
        if (@me)
            @me.onsite = false;
            @me.save
            i_am_the_last()
            prevent_my_status(false, @me.pseudo) if @i_am_alone
            delete_all_my_battles_requests(@me.id)
        end
    end

    private

    def delete_all_my_battles_requests(my_id)
        @battlesRequest = BattlesRequest.where(first_entity_id: my_id, type_battle: 'main-classed')
        @battlesRequest.destroy_all if (@battlesRequest)
        @battlesRequest = BattlesRequest.where(first_entity_id: my_id, type_battle: 'main-unclassed')
        @battlesRequest.destroy_all if (@battlesRequest)
        @battlesRequest = BattlesRequest.where(first_entity_id: my_id, type_battle: 'perso-classed')
        @battlesRequest.destroy_all if (@battlesRequest)
        @battlesRequest = BattlesRequest.where(first_entity_id: my_id, type_battle: 'guild')
        @battlesRequest.destroy_all if (@battlesRequest)
    end

    def prevent_my_status(status, my_pseudo)
        @friendsLinks = FriendsLink.where({first_user_id: current_user_id, first_user_accept: true, second_user_accept: true})
        @friendsLinks.each do |fl|
            user = User.find(fl.second_user_id)
            ActionCable.server.broadcast("user_channel_#{user.pseudo}", {"username": "friend-status", "pseudo": my_pseudo, "status": status}) if user
        end
        
        @friendsLinks = FriendsLink.where({second_user_id: current_user_id, first_user_accept: true, second_user_accept: true})
        @friendsLinks.each do |fl|
            user = User.find(fl.first_user_id)
            ActionCable.server.broadcast("user_channel_#{user.pseudo}", {"username": "friend-status", "pseudo": my_pseudo, "status": status}) if user
        end
    end

    def i_am_the_last
        @i_am_alone = true
        pseudo = User.find(current_user_id).pseudo
        connection.server.connections.each do |conn|
            room_name = conn.subscriptions.identifiers.map {|k| JSON.parse k}
            if (room_name[0] != nil && room_name[0]['room'] == pseudo && room_name[0]['channel'] == 'UserChannel')
                @i_am_alone = false
            end
        end
    end

end