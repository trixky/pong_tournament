class AddPrivateToChatroomss < ActiveRecord::Migration[6.0]
  def change
    add_column :chatrooms, :private, :boolean
  end
end
