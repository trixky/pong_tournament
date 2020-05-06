class Api::ChatroomsController < ApplicationController
  respond_to :json

  # ===================================================================== | CUSTOM CLASS |
  # ===================================/
  # =====================/
  
  class CustomChatroom

    def initialize(id, name, owner, admin, pprivate)
      @id = id
      @name = name
      @owner = owner
      @admin = admin
      @private = pprivate
    end

  end
  
  # ===================================================================== | INDEX |
  # ===================================/
  # =====================/
  
  def index
    request.format = :json
    object = JSON.parse(cookies.encrypted[:data])
    
    arrayCustomChatroom = Array.new
    if (params[:search_entry] != nil)
      sanitize_search_entry = ActiveRecord::Base::sanitize_sql(params[:search_entry])
      @chatrooms = Chatroom.where("name LIKE :prefix", prefix: "#{sanitize_search_entry}%").where({public: true})
      @chatrooms.each do |chatroom|
        arrayCustomChatroom.append(CustomChatroom.new(chatroom.id, chatroom.name, false, false, chatroom["private"]))
      end
    else
      @chatrooms = User.find(JSON.parse(cookies.encrypted[:data])["id"]).chatrooms
      @chatrooms.each do |chatroom|
        @uc = UsersChatroom.where({user_id: object["id"]}).find_by_chatroom_id(chatroom.id)
        arrayCustomChatroom.append(CustomChatroom.new(chatroom.id, chatroom.name, @uc.owner, @uc.admin, true)) if @uc
      end
    end
    respond_with arrayCustomChatroom
  end
  
  # ===================================================================== | SHOW |
  # ===================================/
  # =====================/
  
  def show
    c = Chatroom.find_by_name(params[:id])
    if (params[:user])
      object = []
      sanitize_user = ActiveRecord::Base::sanitize_sql(params[:user])
      users = c.users.where("pseudo LIKE :prefix", prefix: "#{sanitize_user}%")
      users.each do |u|
        chat = UsersChatroom.where({user_id: u.id}).find_by_chatroom_id(c.id)
        res = {
          id: u.id,
          login: u.login,
          pseudo: u.pseudo,
          admin: chat.admin,
          chat_id: chat.chatroom_id,
          owner: chat.owner,
          ban_date: chat.ban_date
        }
        object.push(res)
      end
      render json: object.to_json and return
    else
      render json: c.to_json and return
    end
  end
  
  # ===================================================================== | UPDATE |
  # ===================================/
  # =====================/
  
  def update
    object = JSON.parse(cookies.encrypted[:data])
    
    if (params[:remove_password] != nil && params[:remove_password] == true)
      @c = Chatroom.find_by_name(params[:id])
      if (@c != nil)
        @uc = UsersChatroom.where({user_id: object["id"]}).find_by_chatroom_id(@c.id)
        if (@uc != nil && @uc.owner == true)
          @c.private = false;
          @c.password = nil;
          @c.save
        end
      end
    elsif (params[:change_add_password] != nil && params[:change_add_password] == true)
      @c = Chatroom.find_by_name(params[:id])
      if (@c != nil)
        @uc = UsersChatroom.where({user_id: object["id"]}).find_by_chatroom_id(@c.id)
        if (@uc != nil && @uc.owner == true && params[:new_1] != nil && params[:new_2] != nil && (@c.password == nil || (params[:older] != nil && params[:older] == @c.password)) && params[:new_1] == params[:new_2])
          @c.password = params[:new_1];
          @c.private = true;
          @c.save
        end
      end
    end
    res = {end: true}.to_json
    render json: res
  end
  
  # ===================================================================== | DESTROY |
  # ===================================/
  # =====================/
  
  def destroy
    @m = Message.where({chatrooms_id: params[:id]})
    @c = Chatroom.find(params[:id])
    unless (@m == nil || @c == nil)
      @m.destroy_all
      @c.users_chatrooms.destroy_all
      @c.destroy
    end
    res = {end: true}.to_json
    render json: res
  end
  
  # ===================================================================== | CREATE |
  # ===================================/
  # =====================/
  
  def create
    object = JSON.parse(cookies.encrypted[:data])

    created = "erreur server"
    unless (params[:chatroom] == nil || params[:protected] == nil || params[:password] == nil || params[:private] == nil)
      created = "id utilisteur erroné"
      if (User.exists?(id: object["id"]))
        created = "nom de chatroom vide"
        if (params[:chatroom] != '')
          created = "nom de chatroom deja existant"
          if (!Chatroom.exists?(name: params[:chatroom]))
            Chatroom.create(name: params[:chatroom], password: params[:password], private: params[:protected], public: params[:private])
            UsersChatroom.create(user_id: object["id"], chatroom_id: Chatroom.find_by_name(params[:chatroom]).id, admin: true, owner:true)
            created = "success"
          end
        end
      end
    end
    res = {created: created}.to_json
    render json: res
  end

end