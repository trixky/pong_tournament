class AddFirstUserBlockAndSecondUserBlockToUsersBans < ActiveRecord::Migration[6.0]
  def change
    add_column :users_bans, :first_user_block, :boolean
    add_column :users_bans, :second_user_block, :boolean
  end
end
