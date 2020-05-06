class AddSomeColumnsToGames < ActiveRecord::Migration[6.0]
  def change
    add_column :games, :guild_p1, :string
    add_column :games, :guild_p2, :string
    add_column :games, :tournament_id, :integer
    add_column :games, :winner, :string
  end
end
