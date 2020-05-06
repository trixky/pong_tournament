class CreateGuilds < ActiveRecord::Migration[6.0]
  def change
    create_table :guilds do |t|
      t.string :anagram
      t.string :name
      t.decimal :points

      t.timestamps
    end
  end
end
