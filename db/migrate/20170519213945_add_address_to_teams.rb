class AddAddressToTeams < ActiveRecord::Migration[5.0]
  def change
    add_column :teams, :address, :string
  end
end
