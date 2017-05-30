class Message < ApplicationRecord
  belongs_to :team
  belongs_to :user
  has_many :comments
  has_many :taggings, dependent: :destroy
  has_many :tags, through: :taggings

  mount_uploaders :documents, DocumentUploader

end
