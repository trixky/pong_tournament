class CreateFriendsMessages < ActiveRecord::Migration[6.0]
  def change
    create_table :friends_messages do |t|
      t.integer :user_id
      t.integer :friend_link_id
      t.text :content
    end
  end
end
