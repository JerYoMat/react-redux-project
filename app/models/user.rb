class User < ApplicationRecord
  has_many :favorites
  has_many :companies, through: :favorites
  has_secure_password
end
