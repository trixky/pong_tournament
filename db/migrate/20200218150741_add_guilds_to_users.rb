class AddGuildsToUsers < ActiveRecord::Migration[6.0]
  def change
    add_reference :users, :guild, null: true, foreign_key: true
  end
end
