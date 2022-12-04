class Shot < ApplicationRecord
  belongs_to :bid
  has_one_attached :pic
end
