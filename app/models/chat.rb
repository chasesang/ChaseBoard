class Chat < ApplicationRecord
  belongs_to :user
  after_create_commit { BroadcastRoomJob.perform_later self  }
end
