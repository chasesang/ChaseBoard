class Task < ApplicationRecord
  belongs_to :team
  belongs_to :user

  has_many :assigns, dependent: :destroy
  has_many :users, through: :assigns

  def complete?
    !completed_at.blank?
  end


end
