class Tournament < ApplicationRecord
    has_many :games
    has_many :users_tournaments
    has_many :users, through: :users_tournaments
end
