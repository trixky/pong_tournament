class Api::UsersController < ApplicationController
  respond_to :json
  skip_before_action :verify_authenticity_token

  # ===================================================================== | CUSTOM CLASS |
  # ===================================/
  # =====================/

  class CustomUser
    def initialize(pseudo, bandate, owner, admin, invitation, battle, blocked, are_friend)
      @pseudo = pseudo
      @bandate = bandate
      @owner = owner
      @admin = admin
      @invitation = invitation
      @battle = battle
      @blocked = blocked
      @are_friend = are_friend
    end
  end

  # ===================================================================== | INDEX |
  # ===================================/
  # =====================/

  def index
    object = JSON.parse(cookies.encrypted[:data])
    if params[:findby]
      arrayCustomUser = Array.new 
    end
    
    if params[:pseudo]
      sanitize_pseudo = ActiveRecord::Base::sanitize_sql(params[:pseudo])
      users = User.where("pseudo LIKE :prefix", prefix: "#{sanitize_pseudo}%")
      if (params[:findby] != nil && params[:findby] == "friend")
        users.each do |user|
          friend_invitation_handle(user, object)
          battle_invitation_handle(user, object)
          blocked_handle(user, object)
          are_friend_handle(user, object)
          arrayCustomUser.append(CustomUser.new(user.pseudo, false, false, false, @invitation, @battle, @blocked, @are_friend)) unless object["id"] == user.id
        end
      end
    elsif (params[:findby] != nil && params[:findby] == "chatroom")
      if (params[:value] != nil)
        users = Chatroom.find_by_name(params[:value]).users
        users.each do |user|
          @uc = UsersChatroom.where({user_id: user.id}).find_by_chatroom_id(Chatroom.find_by_name(params[:value]))
          arrayCustomUser.append(CustomUser.new(user.pseudo, @uc.ban_date, @uc.owner, @uc.admin, false, false, false, false)) unless @uc == nil
        end
      end
    else
      users = User.all
    end
    users = arrayCustomUser if params[:findby]
    respond_with users
  end
  
  # ===================================================================== | SHOW |
  # ===================================/
  # =====================/

  def show
    object_json = JSON.parse(cookies.encrypted[:data])
    
    if (params[:pseudo] != nil && params[:pseudo] == "true")
      user = User.find_by_pseudo(params[:id])
    elsif (params[:its_me] != nil && params[:its_me] == "true")
      user = User.find_by_pseudo(object_json["id"])
    else
      user = User.find_by_login(params[:id])
    end
    if (user == nil)
      object = nil
    else
      begin
          img = url_for(user.avatar_pers)
        rescue
          img = ""
      end
      win = Game.where({player_1: user.pseudo}).or(Game.where({player_2: user.pseudo})).where({winner: user.pseudo}).size
      loss = Game.where({player_1: user.pseudo}).or(Game.where({player_2: user.pseudo})).size - win
      main_tournament = Tournament.find_by_main_tournament(true)
      rank = UsersTournament.where({user_id: user.id}).find_by_tournament_id(main_tournament.id).level.to_i
      # rank = UsersTournament.find_by({user_id: user.id, tournament_id: main_tournament.id}).level.to_i
      guild_name = "none..."
      if (user.guild_id != nil)
        guild = Guild.find(user.guild_id)
        guild_name = guild.name if (guild != nil)
      end
      tournaments_win = Tournament.where({winner_id: user.id}).size
      object = {
        pseudo: user.pseudo,
        login: user.login,
        id: user.id,
        url: img,
        two_factor: user.two_factor,
        guild_id: user.guild_id,
        guild_name: guild_name,
        guildStatus: user.guildStatus,
        admin: user.admin,
        ban: user.banned,
        guildStatus: user.guildStatus,
        win: win,
        loss: loss,
        rank: rank,
        tournaments_win: tournaments_win
      }.to_json
    end
    render json: object
  end

  # ===================================================================== | CREATE |
  # ===================================/
  # =====================/

  def create
    if (!params[:pseudo] || params[:pseudo].length < 3 || params[:otp_secret_key])
      res = {
        body: "Incorrects args"
      }
    render json: res, status: 400
    else
      object = JSON.parse(cookies.encrypted[:data])
      uid = 'ed6f5195a198f675c62a59a9f654f05c52942eb69d88187ad8251ec32cf34b4d'
      secret = 'd03d5b6a1728bb6d92e62c13e3ffcd4048aa56b63bbb823ed17e9136baa10b21'
      info = HTTParty.get("https://api.intra.42.fr/v2/me", headers: {
            Authorization:  "Bearer #{object["token"]}"
      })
      if User.exists?(login: params[:login]) || info["error"] || User.exists?(pseudo: params[:pseudo])
        res = {
          error: "user already exist in the database"
        }.to_json
        render json: res, status: 200
      else
        user = User.new user_parameters
        user.admin = false
        user.otp_secret_key = ROTP::Base32.random
        user.save
        if (user.id == 1)
          user.admin = true
          user.save
        end
        user.connected = true
        object = JSON.parse(cookies.encrypted[:data])
        object["pseudo"] = params[:pseudo]
        main_tournament = Tournament.find_by_main_tournament(true)
        if (main_tournament == nil)
          main_tournament = Tournament.create({main_tournament: true})
        end
        user.tournaments << main_tournament
        user_tournament = UsersTournament.where({tournament_id: main_tournament.id}).find_by_user_id(user.id)
        size = main_tournament.users.size
        level = 0
        i = 0
        last = 1
        while i < size
          i = i + last
          level = level + 1
          last = last + 1
        end
        user_tournament.level = level
        user_tournament.save
        user.save
        object["id"] = user.id
        cookies.encrypted[:data] = object.to_json 
        respond_with user, location: api_user_path(user)
      end
    end
  end

  # ===================================================================== | UPDATE |
  # ===================================/
  # =====================/

  def update
    data = JSON.parse(cookies.encrypted[:data])
    user = User.find data["id"]
    if ((params[:banned] && user[:admin] != true) || (params[:two_factor] && !(params[:two_factor] == "false" && user.two_factor != true)) || params[:otp_secret_key])
      res = {
        error: "not allowed"
      }.to_json
      render json: res and return
    elsif ((params[:login] && params[:login] != user["login"]) && user["admin"] != true)
      res = {
        body: "cannot change login"
      }.to_json
      render json: res and return
    else
      if user["admin"] == true && params[:login]
        user = User.find_by_login(params[:login])
      end
      if (params[:avatar_pers] && user.avatar_pers != nil)
        user.avatar_pers.purge
      end
      user.update user_parameters
      object = JSON.parse(cookies.encrypted[:data])      
      if (user.avatar_pers.attached?)
        object["url"] = url_for(user.avatar_pers)
      end
      cookies.encrypted[:data] = object.to_json
      render json: object.to_json
    end
  end

  def destroy
    user = User.find params[:id]
    user.destroy

    respond_with user
  end

  # ===================================================================== | PRIVATE |
  # ===================================/
  # =====================/

  private

  def user_parameters
    params.permit(:login, :pseudo, :two_factor, :victory, :loss, :avatar, :status, :banned, :avatar_pers, :guild_id, :guildStatus)
  end

  def friend_invitation_handle(user, object)
    @invitation = "cant_do_anything"
    @fl = FriendsLink.where({first_user_id: object["id"]}).find_by_second_user_id(user.id)
    if (@fl)
      @invitation = @fl.first_user_accept ? "can_annule_invite" : "can_invite" if (!@fl.second_user_accept)
    else
      @fl = FriendsLink.where({first_user_id: user.id}).find_by_second_user_id(object["id"])
      if (@fl)
        @invitation = @fl.second_user_accept ? "can_annule_invite" : "can_invite" if (!@fl.first_user_accept)
      else 
        @invitation = "can_invite"
      end
    end
    @invitation
  end

  def battle_invitation_handle(user, object)
    @battle = "can_invite"
    @br = BattlesRequest.where({first_entity_id: object["id"], second_entity_id: user.id}).find_by_type_battle('casual')
    if (@br)
      @battle = "can_annule_invite"
    else
      @br = BattlesRequest.where({first_entity_id: user.id, second_entity_id: object["id"]}).find_by_type_battle('casual')
      if (@br)
        @battle = "cant_do_anything"
      end
    end
    @battle
  end

  def blocked_handle(user, object)
    @blocked = false
    @ub = UsersBan.where({first_user_id: object["id"]}).find_by_second_user_id(user.id)
    if (@ub)
      @blocked = true if (@ub.first_user_block != nil && @ub.first_user_block == true)
    else
      @ub = UsersBan.where({first_user_id: user.id}).find_by_second_user_id(object["id"])
      if (@ub)
        @blocked = true if (@ub.second_user_block != nil && @ub.second_user_block == true)
      end
    end
    @blocked
  end

  def are_friend_handle(user, object)
    @are_friend = false
    @fl = FriendsLink.where({first_user_id: object["id"]}).find_by_second_user_id(user.id)
    @fl = FriendsLink.where({first_user_id: user.id}).find_by_second_user_id(object["id"]) unless @fl
    @are_friend = @fl.first_user_accept && @fl.second_user_accept if @fl
    @are_friend
  end

end