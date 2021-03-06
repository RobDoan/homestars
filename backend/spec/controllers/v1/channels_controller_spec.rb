# frozen_string_literal: true

RSpec.describe "Channels", type: :request do
  let!(:user) { create(:user, password: "test1234") }
  before do
    sign_in(user)
  end
  describe "/v1/channels" do
    context "Creating channel" do
      it "create new channel" do
        channel_params = { name: "Example Channel" }
        expect {
          post v1_channels_url, params: { channel: channel_params }
        }.to change { user.channels.count }.by(1)
        json_response = JSON.parse(response.body)
        expect(json_response["name"]).to be == "Example Channel"
      end

      it "creating channel failed" do
        post v1_channels_url, params: { channel: {} }
        json_response = JSON.parse(response.body)
        expect(json_response["errors"]).not_to be_empty
      end
    end
  end

  describe "/v1/channels/:id/update" do
    context "only creator can update the channel" do
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

  describe "/v1/channels/:id/join" do
    context "join channel" do
      let(:channel) { create(:channel) }

      it "only creator can update the channel" do
        put join_v1_channel_url(channel)
        expect(response).to have_http_status(:ok)
        json_response = JSON.parse(response.body)
        expect(json_response["users"]).not_to be_empty
        expect(json_response["users"]).to satisfy("include current user") do |users|
          !users.find { |x| x["email"] === user.email }.nil?
        end
      end
    end
  end

  describe "/v1/channels/join_channels" do
    context "join channel" do
      let(:channel) { create(:channel) }

      it "return list of channels that user has join" do
        user.join(channel)
        get joined_channels_v1_channels_url
        expect(response).to have_http_status(:ok)
        json_response = JSON.parse(response.body)

        expect(json_response).to satisfy("include channel") do |channels|
          !channels.find { |x| x["name"] === channel.name }.nil?
        end
      end
    end
  end
end
