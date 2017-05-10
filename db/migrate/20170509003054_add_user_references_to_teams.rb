class AddUserReferencesToTeams < ActiveRecord::Migration[5.0]
  def change
    add_reference :teams, :user, foreign_key: true
  end
end
