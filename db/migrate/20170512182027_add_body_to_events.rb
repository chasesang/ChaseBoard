class AddBodyToEvents < ActiveRecord::Migration[5.0]
  def change
    add_column :events, :body, :text
  end
end
