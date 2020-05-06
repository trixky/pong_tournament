class AddPresentToUser < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :onsite, :boolean
  end
end
