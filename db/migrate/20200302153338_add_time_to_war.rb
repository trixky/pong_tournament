class AddTimeToWar < ActiveRecord::Migration[6.0]
  def change
    add_column :wars, :start_at, :datetime
    add_column :wars, :end_at, :datetime
  end
end
