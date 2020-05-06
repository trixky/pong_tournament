class ChangeUsersTable < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :qrcode, :boolean
    add_column :users, :connected, :boolean
  end
end
