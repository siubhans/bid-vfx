class Studio < ApplicationRecord
  belongs_to :user
  has_one_attached :image do |attachable|
   attachable.variant :thumb, resize_to_limit: [100, 100]
  end

  def image_url
    Rails.application.routes.url_helpers.url_for(image) if image.attached?
  end
end
