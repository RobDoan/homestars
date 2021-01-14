# frozen_string_literal: true

require "rails_helper"

RSpec.describe JoinedChannel, type: :model do
  let(:joined_channel) { build(:joined_channel) }

  it "creating should be successful" do
    expect { joined_channel.save }.to change { JoinedChannel.count }.by(1)
  end

  context "#associations" do
    it { is_expected.to belong_to(:channel) }
    it { is_expected.to belong_to(:user) }
  end
end
