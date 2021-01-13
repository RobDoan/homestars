FactoryBot.define do
  factory :joined_channel do
    user_id { create(:user) }
    channel_id { create(:channel) }
    status { 1 }
    left_at { Faker::Time.between(from: DateTime.now - 5, to: DateTime.now) }
  end
end
