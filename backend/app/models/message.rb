# frozen_string_literal: true

class Message < ApplicationRecord
  belongs_to :sender, class_name: "User",
             inverse_of: :messages,
             required: true
  belongs_to :channel, required: true

  enum status: { sent: 0, delivered: 1, read: 2, failed: 3 }

  validates :content, presence: true

  default_scope do
    tbl = arel_table
    order(tbl[:created_at].desc)
  end

end
