class Client < ApplicationRecord
  has_many :bids, dependent: :destroy

  belongs_to :user

  validates :name, presence: true
end
