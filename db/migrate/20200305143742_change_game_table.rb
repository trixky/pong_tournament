class ChangeGameTable < ActiveRecord::Migration[6.0]
  def change
    add_column :games, :player_1, :string
    add_column :games, :player_2, :string
  end
end
