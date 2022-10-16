class Bid < ApplicationRecord
  belongs_to :client
  belongs_to :user

  validates :project, presence: true
end
