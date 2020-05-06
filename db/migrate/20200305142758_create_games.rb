class CreateGames < ActiveRecord::Migration[6.0]
  def change
    create_table :games do |t|
      t.decimal :score_p1
      t.decimal :score_p2
      t.boolean :ended
      t.string :game_type

      t.timestamps
    end
  end
end
