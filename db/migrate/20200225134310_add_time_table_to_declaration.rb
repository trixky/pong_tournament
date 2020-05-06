class AddTimeTableToDeclaration < ActiveRecord::Migration[6.0]
  def change
    add_column :declarations, :timetable, :text, array: true, default: []
  end
end
