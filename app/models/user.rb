# frozen_string_literal: true

class User < ApplicationRecord
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable,
         :jwt_authenticatable, jwt_revocation_strategy: Devise::JWT::RevocationStrategies::Null

  has_many :messages, inverse_of: :sender, foreign_key: :sender_id
  has_many :channels, foreign_key: :creator_id
  

  attr_reader :access_token
  enum availability: { online: 0, offline: 1 }

  validates :email, presence: true

  def on_jwt_dispatch(token, _payload)
    @access_token = token
  end
end
