require 'date'

class Api::DeclarationsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    if (params[:receiver])
      declaration = Declaration.where({receiver: params[:receiver]})
    else
      declaration = Declaration.all
    end
    render json: declaration.to_json
  end

  def show
    declaration = Declaration.find params[:id]
    render json: declaration.to_json
  end

  def create
    # if War.find_by({player1: params[:receiver], ended: false}) != nil || War.find_by({player2: params[:receiver], ended: false}) != nil
    if War.where({player1: params[:receiver]}).find_by_ended(false) != nil || War.where({player2: params[:receiver]}).find_by_ended(false) != nil
      render json: {
        error: "the sender is already engage in a war"
      }.to_json and return
    # elsif War.find_by({player1: params[:sender], ended: false}) != nil || War.find_by({player2: params[:sender], ended: false}) != nil
    elsif War.where({player1: params[:sender]}).find_by_ended(false) != nil || War.where({player2: params[:sender]}).find_by_ended(false) != nil
      render json: {
        error: "the receiver is already engage in a war"
      }.to_json and return
    end
    if (params[:points] < "0")
      res = {
        error: "error: you have negative points"
      }.to_json
    render json: res and return
    end
    begin
      Date.parse(params[:start_at])
      Date.parse(params[:end_at])
    rescue ArgumentError
      res = {
        error: "error: invalid start or end date"
      }.to_json
      render json: res and return
    end
    if (params[:timetable].length == 0)
      res = {
        error: "error: you need to provide at least one war time"
      }.to_json
    render json: res and return
    end
    time = params[:timetable]
    time.each do |date|
      array = date.split(" - ")
      begin
        Date.parse(array[0])
        Date.parse(array[1])
      rescue ArgumentError
        res = {
          error: "error: invalid date format"
        }.to_json
        render json: res and return
      end
      if (Date.parse(array[0]) < Date.parse(params[:start_at]) || Date.parse(array[0]) > Date.parse(params[:end_at]) || Date.parse(array[1]) < Date.parse(params[:start_at]) || Date.parse(array[1]) > Date.parse(params[:end_at]))
        res = {
          error: "error: timetable outside of war times"
        }.to_json
        render json: res and return
      end
    end
    object = JSON.parse(cookies.encrypted[:data])
    guild = Guild.find(object["guildId"])
    if (guild.points < params[:points].to_i)
      res = {
        error: "not enough points"
      }.to_json
      render json: res and return
    elsif (guild.name != params[:sender] || params[:start_at] > params[:end_at] || params[:points] < "0")
      res = {
        error: "wrong params"
      }.to_json
      render json: res and return
    else
      params[:sender] = guild.name
      declaration = Declaration.new declaration_parameters
      declaration.timetable = params[:timetable]     
      declaration.save
      render json: declaration
    end
  end

  def update
    declaration = Declaration.find params[:id]
    declaration.update_attributes declaratiom_parameters
    render json: declaration.to_json
  end

  def destroy
    object = JSON.parse(cookies.encrypted[:data])
    guild = Guild.find(object["guildId"])
    declaration = Declaration.where({sender: params[:id]}).where({receiver: guild.name})
    declaration[0].destroy

    render json: declaration.to_json
  end

  private

  def declaration_parameters
    params.require(:declaration).permit(:receiver, :points, :start_at, :end_at, :sender, :timetable, :unanswered)
  end
end