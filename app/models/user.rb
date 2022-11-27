class User < ApplicationRecord
    has_many :clients, dependent: :destroy
    has_many :studios, dependent: :destroy
    has_many :bids, dependent: :destroy
    has_secure_password
end
