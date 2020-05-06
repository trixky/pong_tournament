class RenameFriendsMessagesColumns < ActiveRecord::Migration[6.0]
  def change
    rename_column :friends_messages, :user_id, :forwarder_id
    rename_column :friends_messages, :friend_link_id, :recipient_id
  end
end
