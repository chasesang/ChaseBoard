class AddLongitudeLatitudeToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :longtitude, :float
    add_column :users, :latitude, :float
  end
end
