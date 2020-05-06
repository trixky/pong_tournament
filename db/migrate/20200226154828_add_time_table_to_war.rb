class AddTimeTableToWar < ActiveRecord::Migration[6.0]
  def change
    add_column :wars, :timetable, :text,  array: true, default: []
  end
end
