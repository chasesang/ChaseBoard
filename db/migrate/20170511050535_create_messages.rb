class CreateMessages < ActiveRecord::Migration[5.0]
  def change
    create_table :messages do |t|
      t.string :title
      t.text :description
      t.string :category
      t.references :team, foreign_key: true

      t.timestamps
    end
  end
end
