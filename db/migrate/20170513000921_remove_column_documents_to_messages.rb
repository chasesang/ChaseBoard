class RemoveColumnDocumentsToMessages < ActiveRecord::Migration[5.0]
  def change
    remove_column :messages, :documents, :string
  end
end
