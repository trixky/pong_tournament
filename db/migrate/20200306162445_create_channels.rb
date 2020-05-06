class CreateChannels < ActiveRecord::Migration[6.0]
  def change
    create_table :channels do |t|
      t.string :channel
      t.string :room
      t.text :subscription, array: true, default: []

      t.timestamps
    end
  end
end
