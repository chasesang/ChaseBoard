class Team < ApplicationRecord
belongs_to :user
has_many :tasks, dependent: :destroy
has_many :joins, dependent: :destroy
has_many :users, through: :joins



end
