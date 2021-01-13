FactoryBot.define do
  factory :channel do
    name { Faker::FunnyName.two_word_name }
    creator { create(:creator) }
  end
end
