class CreateWars < ActiveRecord::Migration[6.0]
  def change
    create_table :wars do |t|
      t.datetime :start_at
      t.datetime :end_at
      t.decimal :prize
      t.decimal :player1_points
      t.decimal :player2_points
      t.string :player1
      t.string :player2
      t.decimal :max_unanswered
      t.decimal :player1_unanswered
      t.decimal :player2_unanswered

      t.timestamps
    end
  end
end
