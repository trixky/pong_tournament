class Api::GuildsController < ApplicationController
  respond_to :json
  skip_before_action :verify_authenticity_token
  
  def index
    if (params[:name] != nil)
      guild_id = JSON.parse(cookies.encrypted[:data])["guildId"]
      sanitize_name = ActiveRecord::Base::sanitize_sql(params[:name])
      if (!params[:admin])
        if (params[:checked] != nil && params[:checked] == "true")
          guild = Guild.where("name LIKE :prefix", prefix: "#{sanitize_name}%").order('points DESC').where.not({id: guild_id})
        else
          guild = Guild.where("name LIKE :prefix", prefix: "#{sanitize_name}%").order(:name).where.not({id: guild_id})
        end
      else
        if (params[:checked])
          guild = Guild.where("name LIKE :prefix", prefix: "#{sanitize_name}%").order('points DESC')
        else
          guild = Guild.where("name LIKE :prefix", prefix: "#{sanitize_name}%").order(:name)
        end
      end
      object = []
      guild = guild.each do |g|
        res = {
          id: g["id"],
          anagram: g["anagram"],
          name: g["name"],
          points: g["points"].to_i,
          flag: url_for(g["flags"])
        }
        object.push(res);
      end
    else
      object = Guild.all
    end
    render json: object.to_json
  end

  def show
    guild = Guild.find(params[:id])
    if !guild
      render json: {
        error: "no guild found"
      }.to_json and return
    elsif (guild.flag.attached?)
      url = url_for(guild.flag)
    else
      url = ""
    end
    sanitize_pseudo = ActiveRecord::Base::sanitize_sql(params[:pseudo])
    if params[:admin]
      res = User.where("pseudo LIKE :prefix", prefix: "#{sanitize_pseudo}%").where({guild_id: params[:id]})
    elsif (params[:pseudo])
      res = User.where("pseudo LIKE :prefix", prefix: "#{sanitize_pseudo}%").where({guild_id: params[:id]}).where({guildStatus: "officer"})
    else
      res = {
          id: guild.id,
          anagram: guild.anagram,
          name: guild.name,
          points: guild.points,
          flag: url
      }.to_json
    end
    render json: res
  end

  def create
    if (params[:anagram].length > 5 || params[:name].length < 3 || params[:points] != "0" || params[:anagram].length < 2)
      res = {
        error: "Incorrects args"
      }
      render json: res, status: 200
    elsif Guild.exists?(name: params[:name])
      res = {
        body: "guild name already exist in the database"
      }.to_json
      render json: res, status: 200
    elsif Guild.exists?(anagram: params[:anagram])
      res = {
        body: "guild anagram already exist in the database"
      }.to_json
      render json: res, status: 200
    else
      object = JSON.parse(cookies.encrypted[:data])
      guild = Guild.new guild_parameters
      guild.points = 500
      user = User.find(object["id"])
      if (user.guild_id != nil)
        res = {
          body: "User already in a guild"
        }.to_json
        render json: res, status: 200
      else
        user.guildStatus = "owner";
        user.save
        object = JSON.parse(cookies.encrypted[:data])
        guild.users << user;
        guild.save
        object["guildId"] = user.guild_id
        object["guildStatus"] = "owner"
        cookies.encrypted[:data] = object.to_json
        if (params[:flag])
          url = url_for(guild.flag)
        else
          url = "";
        end
        res = {
          id: guild.id,
          name: guild.anagram,
          points: guild.points,
          url: url
        }.to_json
        render json: res
      end
    end
  end

  def update

    object = JSON.parse(cookies.encrypted[:data])
    guild = Guild.find params[:id]
    guild.update_attributes params.permit(:name, :anagram, :points)
    if (params[:user])
      user = User.find(params[:user])
      guild.users << user
      user.guildStatus = "officer"
      user.save
    end
    if object["guildStatus"] == "owner" || object["admin"] == true
      if params[:ban]
        user = User.find_by_pseudo(params[:ban])
        guild.users.delete(user);
      elsif params[:promote]
        user = User.find_by_pseudo(params[:promote])
        user.guildStatus = "owner"
        user.save
      elsif params[:demote]
        user = User.find_by_pseudo(params[:demote])
        user.guildStatus = "officer"
        user.save
      end
    else
      res = {
        error: "not allowed"
      }.to_json
      render json: res and return
    end
    render json: guild
  end

  def destroy
    object = JSON.parse(cookies.encrypted[:data])
    user = User.find_by_login(object["login"])
    guild = Guild.find params[:id]
    if (user.guild_id != guild.id || user.guildStatus != "owner")
      render json: {
        error: "not allowed"
      }.to_json and return
    end
    war = War.find_by_player1(guild.name)
    if (!war)
      war = War.find_by_player2(guild.name)
    end
    if (war)
      if (war.player1 != guild.name)
        opponent = Guild.find_by_name(war.player1)
      else
        opponent = Guild.find_by_name(war.player2)
      end
      opponent.points += war.prize
      opponent.save
      war.destroy
    end
    guild.users.delete_all
    guild.destroy
    render json: guild.to_json
  end

  private

  def guild_parameters
    params.permit(:name, :anagram, :points, :flag)
  end
end