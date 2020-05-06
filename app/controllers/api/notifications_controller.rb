class Api::NotificationsController < ApplicationController
    respond_to :json

    # ===================================================================== | CUSTOM CLASS |
    # ===================================/
    # =====================/

    class CustomNotification
        def initialize(type, id, value, date)
            @type = type;
            @date = date
            if (type = "friend-request")
                @id = id
                @value = value
            elsif (true)
                # # #
            end
        end
    end

    # ===================================================================== | INDEX |
    # ===================================/
    # =====================/

    def index
        request.format = :json
        object = JSON.parse(cookies.encrypted[:data])
        arrayCustomNotification = Array.new

        # ========================================================= friend notifications
        @all_first = FriendsLink.where({first_user_id: object["id"]})
        @all_first.each do |first|
            blocked_handle(first.second_user_id, object)
            if (@blocked == false)
                arrayCustomNotification.append(CustomNotification.new("friend-request", first.id, User.find(first.second_user_id).pseudo, first.created_at)) if (first.first_user_accept == false && first.second_user_accept == true)
            end
        end
        @all_second = FriendsLink.where({second_user_id: object["id"]})
        @all_second.each do |second|
            blocked_handle(second.first_user_id, object)
            if (@blocked == false)
                arrayCustomNotification.append(CustomNotification.new("friend-request", second.id, User.find(second.first_user_id).pseudo, second.created_at)) if (second.first_user_accept == true && second.second_user_accept == false)
            end
        end
        # ========================================================= battle notification
        # ============================ casual battle
        @all_casual_battle = BattlesRequest.where({second_entity_id: object["id"]}, {type_battle: 'casual'})
        @all_casual_battle.each do |casual_battle|
            first = User.find(casual_battle.first_entity_id)
            blocked_handle(first.id, object)
            if (@blocked == false)
                arrayCustomNotification.append(CustomNotification.new("casual-battle", casual_battle.id, first.pseudo, casual_battle.created_at))
            end
        end
        respond_with arrayCustomNotification
    end

    private

    def blocked_handle(user_id, object)
        @blocked = false
        ub = UsersBan.where({first_user_id: object["id"]}).find_by_second_user_id(user_id)
        if (ub)
            @blocked = true if (ub.first_user_block != nil && ub.first_user_block == true)
        else
            ub = UsersBan.where({first_user_id: user_id}).find_by_second_user_id(object["id"])
            if (ub)
                @blocked = true if (ub.second_user_block != nil && ub.second_user_block == true)
            end
        end
        @blocked
    end
end