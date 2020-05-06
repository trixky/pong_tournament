class CreateUsersBans < ActiveRecord::Migration[6.0]
  def change
    create_table :users_bans do |t|
      t.integer :first_user_id, foreign_key: true
      t.integer :second_user_id, foreign_key: true
    end
  end
end