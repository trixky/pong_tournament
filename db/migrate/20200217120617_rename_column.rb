class RenameColumn < ActiveRecord::Migration[6.0]
  def change
    rename_column :users_chatrooms, :chatrooms_id, :chatroom_id
    rename_column :users_chatrooms, :users_id, :user_id
  end
end
