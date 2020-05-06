class AddColumnEndedToWar < ActiveRecord::Migration[6.0]
  def change
    add_column :wars, :ended, :boolean
  end
end
