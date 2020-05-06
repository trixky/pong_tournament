class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :login
      t.string :pseudo
      t.boolean :two_factor
      t.decimal :victory
      t.decimal :loss
      t.string :status
      t.string :banned

      t.timestamps
    end
  end
end
