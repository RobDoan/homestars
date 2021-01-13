RSpec.describe ChannelPolicy, type: :policy do
  subject(:channel_policy) { described_class }

  let(:user) { create(:user) }
  let(:creator) { create(:creator) }
  let(:channel) { create(:channel, creator: creator) }

  let(:creator_context) { ApplicationController::PunditUser.new(creator, '127.0.0.0') }
  let(:user_context) { ApplicationController::PunditUser.new(user, '127.0.0.0') }

  permissions :index?, :show?, :create?, :join? do
    it "any users have permission to view or create a channel" do
      expect(channel_policy).to permit(user_context, channel)
      expect(channel_policy).to permit(creator_context, channel)
    end
  end

  permissions :update? do
    context 'creator' do
      it 'can update channel' do
        expect(channel_policy).to permit(creator_context, channel)
      end
    end

    context 'non-creator' do
      it 'can not update channel' do
        expect(channel_policy).not_to permit(user_context, channel)
      end
    end
  end
end
