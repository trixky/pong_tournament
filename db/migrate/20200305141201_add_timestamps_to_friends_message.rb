class AddTimestampsToFriendsMessage < ActiveRecord::Migration[6.0]
  def change
    add_column :friends_messages, :created_at, :datetime
    add_column :friends_messages, :updated_at, :datetime
  end
end
