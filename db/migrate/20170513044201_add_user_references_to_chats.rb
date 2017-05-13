class AddUserReferencesToChats < ActiveRecord::Migration[5.0]
  def change
    add_reference :chats, :user, foreign_key: true
  end
end
