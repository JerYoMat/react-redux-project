require 'pry'
class Company < ApplicationRecord

  #belongs_to :user
  has_many :favorites
  validates :name, 
    presence: true, length: { maximum: 255 },
    uniqueness: {case_sensitive: false}
end
