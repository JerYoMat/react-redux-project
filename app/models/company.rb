class Company < ApplicationRecord
  include ActiveSupport::Inflector
  belongs_to :user
  has_many :favorites
  before_save { name.titleise! }
  validates :name, 
  presence: true, length: { maximum: 255 },
  uniqueness: {case_sensitive: false}
end
