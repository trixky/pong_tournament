class AddGuildStatusToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :guildStatus, :string
  end
end
