class CreateTournaments < ActiveRecord::Migration[6.0]
  def change
    create_table :tournaments do |t|
      t.boolean :type
      t.datetime :start_at
      t.datetime :end_at
      t.decimal :level
      t.decimal :prize

      t.timestamps
    end
  end
end
