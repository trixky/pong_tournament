class Api::TwofactorController < ApplicationController
    skip_before_action :verify_authenticity_token

    def create
        data = JSON.parse(cookies.encrypted[:data])
        user = User.find_by_login(data["login"])
        if (user.qrcode == true || user.two_factor == true)
            render json: {
                error: "not allowed"
            }.to_json and return
        end
        totp = ROTP::TOTP.new(user.otp_secret_key)
        user.qrcode = true
        user.two_factor = true
        user.save
        render json: {
            uri: totp.provisioning_uri("pong")
        }.to_json and return
    end

    def destroy
        data = JSON.parse(cookies.encrypted[:data])
        user = User.find_by_login(data["login"])
        if (user.qrcode == false || user.two_factor == false)
            render json: {
                error: "not allowed"
            }.to_json and return
        end
        totp = ROTP::TOTP.new(user.otp_secret_key)
        if totp.verify(params[:code])
            user.qrcode = false
            user.two_factor = false
            user.save
            render json: {
                success: "two factor disabled"
            }.to_json
        else
            render json: {
                error: "invalid code"
            }.to_json
        end
    end

    def show
        user = User.find_by_login(params[:id])
        if (user.qrcode == false || user.two_factor == false)
            render json: {
                error: "not allowed"
            }.to_json and return
        end
        totp = ROTP::TOTP.new(user.otp_secret_key)
        if totp.verify(params[:code])
            user.connected = true
            user.save
            render json: {
                success: "authenticated"
            }.to_json
        else
            render json: {
                error: "invalid code"
            }.to_json
        end
    end
end