class Chat < ApplicationRecord
  belongs_to :user
  after_create_commit { BroadcastChatJob.perform_later self  }
end
