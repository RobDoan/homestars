require 'rails_helper'

RSpec.describe Channel, type: :model do
  let(:channel) { build(:channel) }
  it "creating channel should be successful" do
    expect { channel.save }.to change { Channel.count }.by(1)
  end

  context "#validations" do
    it { is_expected.to validate_presence_of(:name) }
  end

  context '#associations' do
    it { is_expected.to belong_to(:creator) }
    it { is_expected.to have_many(:messages) }
  end

end
