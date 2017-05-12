class Team < ApplicationRecord
belongs_to :user
has_many :tasks, dependent: :destroy
has_many :messages, dependent: :destroy
has_many :joins, dependent: :destroy
has_many :users, through: :joins

mount_uploader :documents, DocumentUploader

end
