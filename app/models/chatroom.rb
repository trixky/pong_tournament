class Chatroom < ApplicationRecord
    has_many :users_chatrooms
    has_many :users, through: :users_chatrooms
end
