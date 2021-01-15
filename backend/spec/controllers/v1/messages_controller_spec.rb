RSpec.describe "Messages", type: :request do
  describe "/v1/channels/:channel_id/messages" do
    let!(:user) { create(:user) }
    let!(:channel) { create(:channel, creator: user) }

    before do
      sign_in(user)
    end

    context "Creating Message" do
      it "create a message" do
        expect {
          post v1_channel_messages_url(channel), params: { message: { content: "A example message" } }
        }.to change { user.messages.count }.by(1)
        channel.reload
        expect(channel.messages.map(&:content)).to include("A example message")
      end

      it "creating message failed" do
        post v1_channel_messages_url(channel), params: { message: { content: '' } }
        json_response = JSON.parse(response.body)
        expect(json_response["errors"]).not_to be_empty
      end
    end
  end
end
