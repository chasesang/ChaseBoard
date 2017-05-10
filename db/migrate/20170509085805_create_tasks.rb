class CreateTasks < ActiveRecord::Migration[5.0]
  def change
    create_table :tasks do |t|
      t.text :body
      t.references :team, foreign_key: true

      t.timestamps
    end
  end
end
