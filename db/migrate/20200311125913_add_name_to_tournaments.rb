class AddNameToTournaments < ActiveRecord::Migration[6.0]
  def change
    add_column :tournaments, :name, :string
  end
end
