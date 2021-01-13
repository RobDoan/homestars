# frozen_string_literal: true

FactoryBot.define do
  factory :user, aliases: [:creator, :sender] do
    email { Faker::Internet.email }
    password { "ch@ng3m3" }
  end
end
