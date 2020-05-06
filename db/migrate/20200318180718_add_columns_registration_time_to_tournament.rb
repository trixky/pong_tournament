class AddColumnsRegistrationTimeToTournament < ActiveRecord::Migration[6.0]
  def change
    add_column :tournaments, :start_registration, :datetime
    add_column :tournaments, :end_registration, :datetime
  end
end
