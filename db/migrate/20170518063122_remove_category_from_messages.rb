class RemoveCategoryFromMessages < ActiveRecord::Migration[5.0]
  def change
    remove_column :messages, :category, :string
  end
end
