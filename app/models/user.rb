class User < ApplicationRecord
  has_secure_password
  has_many :teams, dependent: :nullify
  has_many :tasks
  has_many :joins, dependent: :destroy
  has_many :joined_teams, through: :joins, source: :team

  validates(:first_name, { presence: true })
  validates(:last_name, { presence: true })
  validates(:email, { presence: true })


  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i
  validates :email, presence: true,
                        uniqueness: true,
                        case_sensitive: false,
                        format: VALID_EMAIL_REGEX
end
