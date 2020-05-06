class CreateUsersChatrooms < ActiveRecord::Migration[6.0]
  def change
    create_table :users_chatrooms do |t|
      t.belongs_to :users, foreign_key: true
      t.belongs_to :chatrooms, foreign_key: true
      t.datetime :ban_date
      t.boolean :admin
      t.boolean :owner
      t.timestamps
    end
  end
end
