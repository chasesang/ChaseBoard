class AddDocumentsToTasks < ActiveRecord::Migration[5.0]
  def change
    add_column :tasks, :documents, :json
  end
end
