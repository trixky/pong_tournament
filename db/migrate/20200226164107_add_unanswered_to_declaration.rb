class AddUnansweredToDeclaration < ActiveRecord::Migration[6.0]
  def change
    add_column :declarations, :unanswered, :decimal
  end
end
