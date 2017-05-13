class Task < ApplicationRecord
  belongs_to :team
  belongs_to :user #author

  has_many :assigns, dependent: :destroy
  has_many :assignees, through: :assigns, source: :user
  mount_uploaders :documents, DocumentUploader

  def complete?
    !completed_at.blank?
  end

  def assignee_short_names
    assignees.map(&:first_name).join(",")
  end

  def has_author?
    user.present?
  end

end
