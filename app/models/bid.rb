class Bid < ApplicationRecord
  has_many :shots, dependent: :destroy

  belongs_to :client
  belongs_to :user

  validates :project, presence: true
end
