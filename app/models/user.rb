class User < ApplicationRecord
    has_many :clients
    has_many :studios
    has_many :bids
    has_secure_password
end
