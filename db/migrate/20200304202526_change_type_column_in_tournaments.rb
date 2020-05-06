class ChangeTypeColumnInTournaments < ActiveRecord::Migration[6.0]
  def change
    rename_column :tournaments, :type, :main_tournament
  end
end
