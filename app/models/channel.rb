class Channel < ApplicationRecord
  belongs_to :creator, class_name: 'User', required: true
  has_many :messages
  has_many :joined_channels, dependent: :destroy
  has_many :users, through: :joined_channels

  validates :name, presence: true
end
