class CreateMessages < ActiveRecord::Migration[6.0]
  def change
    create_table :messages do |t|
      t.belongs_to :users, foreign_key: true
      t.belongs_to :chatrooms, foreign_key: true
      t.datetime :date
      t.text :content
      t.timestamps
    end
  end
end
