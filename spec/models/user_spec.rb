# frozen_string_literal: true
RSpec.describe User, type: :model do
  let(:user) { build(:user) }

  it "creating user should be successful" do
    expect { user.save }.to change { User.count }.by(1)
  end

  context '#validations' do
    it { is_expected.to validate_presence_of(:email) }
  end

  context '#associations' do
    it { is_expected.to have_many(:messages) }
  end

end
