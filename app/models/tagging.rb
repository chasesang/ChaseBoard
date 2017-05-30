class Tagging < ApplicationRecord
  belongs_to :message
  belongs_to :tag
  validates :message_id, uniqueness: {scope: :tag_id}
end
