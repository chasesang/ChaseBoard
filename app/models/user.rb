class User < ApplicationRecord
  has_secure_password
  has_many :teams, dependent: :nullify
  has_many :tasks, dependent: :nullify
  has_many :messages, dependent: :nullify
  has_many :comments, dependent: :nullify
  has_many :joins, dependent: :destroy
  has_many :joined_teams, through: :joins, source: :team

  has_many :assigns, dependent: :destroy
  has_many :assigned_tasks, through: :assigns, source: :task

  has_many :events, dependent: :nullify
  has_many :events, dependent: :nullify
  has_many :locations, dependent: :destroy

  has_many :bookmarks, dependent: :destroy

  validates(:first_name, { presence: true })
  validates(:last_name, { presence: true })
  validates(:email, { presence: true })

  mount_uploaders :documents, DocumentUploader

  geocoded_by :address   # can also be an IP address
  after_validation :geocode          # auto-fetch coordinates

  reverse_geocoded_by :latitude, :longitude
  after_validation :reverse_geocode  # auto-fetch address


  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i
  validates :email, presence: true,
                        uniqueness: true,
                        case_sensitive: false,
                        format: VALID_EMAIL_REGEX
end
