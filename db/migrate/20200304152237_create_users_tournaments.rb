class CreateUsersTournaments < ActiveRecord::Migration[6.0]
  def change
    create_table :users_tournaments do |t|
      t.belongs_to :user, foreign_key: true
      t.belongs_to :tournament, foreign_key: true
      t.decimal :level
      t.timestamps
    end
  end
end
