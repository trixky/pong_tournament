class AddColumnWinnerToTournaments < ActiveRecord::Migration[6.0]
  def change
    add_column :tournaments, :winner_id, :integer    
  end
end
