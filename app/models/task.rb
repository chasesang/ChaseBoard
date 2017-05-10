class Task < ApplicationRecord
  belongs_to :team
  belongs_to :user

  def complete?
    !completed_at.blank?
  end


end
