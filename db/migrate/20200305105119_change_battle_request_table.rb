class ChangeBattleRequestTable < ActiveRecord::Migration[6.0]
  def change
    remove_column :battles_requests, :third_entity_id, :decimal
    remove_column :battles_requests, :type_entities, :string
  end
end
