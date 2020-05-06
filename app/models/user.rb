class User < ApplicationRecord
    has_many :games
    has_one_attached :avatar_pers
    has_many :users_chatrooms
    has_many :users_tournaments
    has_many :tournaments, through: :users_tournaments
    has_one :guilds
    has_many :chatrooms, through: :users_chatrooms 
end
