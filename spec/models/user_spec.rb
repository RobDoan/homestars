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
    it { is_expected.to have_many(:channels) }
    it { is_expected.to have_many(:joined_channels) }
    it { is_expected.to have_many(:participated_channels) }
  end

  context "#join a channel" do
    subject(:user) { create(:user) }
    let!(:channel) { create(:channel) }
    let!(:channel2) { create(:channel) }
    let!(:joined_channels) { create(:joined_channel, user: user, channel: channel) }

    context "joined?" do
      it { is_expected.not_to be_joined(channel2) }
      it { is_expected.to be_joined(channel) }
    end

    it 'join a channel' do
      user.join(channel2)
      expect(user).to be_joined(channel)
    end

    it "join a channel already joined" do
      expect {
        user.join(channel)
      }.not_to change { user.participated_channels.count }
    end

  end

end
