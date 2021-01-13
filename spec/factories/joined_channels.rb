FactoryBot.define do
  factory :joined_channel do
    user { create(:user) }
    channel { create(:channel) }
    status { 1 }
    left_at { Faker::Time.between(from: DateTime.now - 5, to: DateTime.now) }
  end
end
