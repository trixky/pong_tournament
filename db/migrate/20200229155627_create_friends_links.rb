class CreateFriendsLinks < ActiveRecord::Migration[6.0]
  def change
    create_table :friends_links do |t|
      t.integer :first_user_id
      t.integer :second_user_id
      t.datetime :first_user_mute
      t.datetime :second_user_mute
      t.boolean :first_user_accept
      t.boolean :second_user_accept
    end
  end
end
