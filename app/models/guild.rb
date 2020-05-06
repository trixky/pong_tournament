class Guild < ApplicationRecord
    has_one_attached :flag
    has_many :users
    has_many :games
end
