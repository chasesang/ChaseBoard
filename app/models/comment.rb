class Comment < ApplicationRecord
  belongs_to :message
  belongs_to :user
  validates :content, presence: true
end
