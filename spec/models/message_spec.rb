# frozen_string_literal: true
RSpec.describe Message, type: :model do
  let(:message) { build(:message) }

  it "creating user should be successful" do
    expect { message.save }.to change { Message.count }.by(1)
  end

  context "#validations" do
    it { is_expected.to validate_presence_of(:content) }
  end

  context '#associations' do
    it { is_expected.to belong_to(:sender) }
  end
end
