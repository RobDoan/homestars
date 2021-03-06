# frozen_string_literal: true

FactoryBot.define do
  factory :message do
    content { "Incoming Message" }
    status { "sent" }
    sender { create(:user) }
    channel { create(:channel) }
  end
end
