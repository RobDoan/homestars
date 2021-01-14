# frozen_string_literal: true

class JoinedChannel < ApplicationRecord
  belongs_to :user, required: true
  belongs_to :channel, required: true

  enum status: { active: 0, left: 1 }

  alias_attribute :joined_at, :created_at
end
