class CreateDeclarations < ActiveRecord::Migration[6.0]
  def change
    create_table :declarations do |t|
      t.string :sender
      t.string :receiver
      t.decimal :points
      t.datetime :start_at
      t.datetime :end_at

      t.timestamps
    end
  end
end
