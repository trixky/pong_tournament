class ChatChannel < ApplicationCable::Channel

  def subscribed
    stream_from "chat_channel_#{params[:room]}"
    
    accepted = false;
    if (User.where({id: current_user_id}).exists?)                                    # utilisateur existant
      if (User.find(current_user_id).chatrooms.exists?(name: params[:room]))        # chatroom existant
        c = User.find(current_user_id).chatrooms.find_by(name: params[:room]);
        if (UsersChatroom.exists?(user_id: current_user_id, chatroom_id: c.id))
          uc = UsersChatroom.find_by(user_id: current_user_id, chatroom_id: c.id);
          accepted = true if (uc.ban_date == nil || uc.ban_date < Time.now)         # utilisateur ban
        end
      end
    end
    reject unless accepted;
    ActionCable.server.broadcast("chat_channel_#{params[:room]}", {"messageContent": '0', "username": "server", "date": "noDate"})
  end
  
  def receive(data)
    check_back
    @c = Chatroom.find_by_name(params[:room])
    if (@c)
      @uc = UsersChatroom.where({user_id: current_user_id}).find_by_chatroom_id(@c.id)
      if (@uc && (@uc.ban_date == nil || @uc.ban_date < Time.now))
        if (data["messageContent"] != nil && data["messageContent"].length > 0)
          message = Message.new(content: data["messageContent"], users_id: current_user_id, chatrooms_id: @c.id)
          message.save
          ActionCable.server.broadcast("chat_channel_#{params[:room]}", {"messageContent": message.content, "username": User.find(current_user_id).pseudo, "date": message.created_at})
        end
      end
    end
  end
  
  def unsubscribed
    stream_from "chat_channel_#{params[:room]}"
    ActionCable.server.broadcast("chat_channel_#{params[:room]}", {"messageContent": '0', "username": "server", "date":"noDate"})
  end

  private
  
  def check_back()
    cc = Chatroom.find_by_name(params[:room])
    ucuc = UsersChatroom.where({user_id: current_user_id}).find_by_chatroom_id(cc.id)
    reject_subscription if (ucuc.ban_date != nil && ucuc.ban_date > Time.now)
  end

  # def clean_connection()
  #   connection.server.connections.each do |conn|
  #     room_name = conn.subscriptions.identifiers.map {|k| JSON.parse k}
  #     if (room_name[0] != nil && room_name[0]['room'] == params[:room])
  #       c = Chatroom.find_by_name(params[:room])
  #       uc = UsersChatroom.where({user_id: conn.current_user_id}).find_by_chatroom_id(c.id)
  #       if (uc.ban_date != nil && uc.ban_date > Time.now)
  #         remote_connection = ActionCable.server.remote_connections.where({current_user_id: conn.current_user_id})
  #         remote_connection.disconnect
  #         remote_connection.unsubscribe
  #         remote_connection.reject_subscription
  #       end
  #     end
  #   end
  # end

  # def connections_count(diff)
  #   connections_array = []
  #   connection.server.connections.each do |conn|
  #     room_name = conn.subscriptions.identifiers.map {|k| JSON.parse k}
  #     if (!connections_array.include?(conn.current_user_id) && room_name[0] != nil && room_name[0]['room'] == params[:room]) 
  #       connections_array << conn.current_user_id unless (conn.current_user_id == current_user_id && diff == -1)
  #     end
  #   end
  #   (connections_array.length).to_s + '/' + Chatroom.find_by_name(params[:room]).users.length.to_s
  # end

end
