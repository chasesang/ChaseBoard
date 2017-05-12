class AddDocumentsToTeams < ActiveRecord::Migration[5.0]
  def change
    add_column :teams, :documents, :json
  end
end
