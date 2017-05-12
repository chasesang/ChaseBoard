class AddDocumentsToMessages < ActiveRecord::Migration[5.0]
  def change
    add_column :messages, :documents, :string
  end
end
