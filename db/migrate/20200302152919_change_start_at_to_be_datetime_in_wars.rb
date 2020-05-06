class ChangeStartAtToBeDatetimeInWars < ActiveRecord::Migration[6.0]
  def change
    remove_column :wars, :start_at
    remove_column :wars, :end_at
  end
end
