class AddTimestampsToFriendsLink < ActiveRecord::Migration[6.0]
  def change
    add_column :friends_links, :created_at, :datetime
    add_column :friends_links, :updated_at, :datetime
  end
end
