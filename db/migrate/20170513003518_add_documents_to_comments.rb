class AddDocumentsToComments < ActiveRecord::Migration[5.0]
  def change
    add_column :comments, :documents, :json
  end
end
