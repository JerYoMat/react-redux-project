class User < ApplicationRecord
  has_many :favorites
  has_many :companies
  has_secure_password
  before_save { email.downcase! }
  validates :email, 
    presence: true, length: { maximum: 255 },
    format: { with: VALID_EMAIL_REGEX }, 
    uniqueness: {case_sensitive: false}
  validates :password, 
    presence: true, 
    length: {minimum: 7},
    allow_nil: true
end
