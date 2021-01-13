RSpec.describe 'Channels', type: :request do

  describe '/v1/channels' do
    let!(:user) { create(:user, password: 'test1234') }
    before do
      sign_in(user)
    end

    context "Creating channel" do
      it "create new channel" do
        channel_params = { name: "Example Channel" }
        expect {
          post v1_channels_url, params: { channel: channel_params }
        }.to change { user.channels.count }.by(1)
        json_response = JSON.parse(response.body)
        expect(json_response['name']).to be == 'Example Channel'
      end

      it "creating channel failed" do
        post v1_channels_url, params: { channel: {} }
        json_response = JSON.parse(response.body)
        expect(json_response['errors']).not_to be_empty
      end
    end

    context "update channel" do
      let(:channel) { create(:channel) }
      it "only creator can update the channel" do
        put v1_channel_url(channel), params: { channel: { name: "A New Name" } }
        expect(response).to have_http_status(:unauthorized)
      end

      it "update channel name" do
        sign_in(channel.creator)
        put v1_channel_url(channel), params: { channel: { name: "A New Name" } }
        expect(response).to have_http_status(:ok)
        channel.reload
        expect(channel.name).to be == "A New Name"
      end
    end

  end
end
