class CreateBattlesRequests < ActiveRecord::Migration[6.0]
  def change
    create_table :battles_requests do |t|
      t.integer :first_entity_id
      t.integer :second_entity_id
      t.integer :third_entity_id
      t.string :type_entities
      t.string :type_battle
      t.timestamps
    end
  end
end
