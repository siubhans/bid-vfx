class Shot < ApplicationRecord
  belongs_to :bid
  has_one_attached :pic do |attachable|
   attachable.variant :thumb, resize_to_limit: [100, 100]
  end
end
