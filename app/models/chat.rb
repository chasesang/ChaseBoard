class Chat < ApplicationRecord
  after_create_commit { BroadcastChatJob.perform_later self}

end
