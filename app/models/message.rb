class Message < ApplicationRecord
  belongs_to :team
  belongs_to :user
  has_many :comments
  mount_uploader :documents, DocumentUploader
  
end
