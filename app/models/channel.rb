class Channel < ApplicationRecord
  belongs_to :creator, class_name: 'User', required: true
  has_many :messages
  validates :name, presence: true
end
