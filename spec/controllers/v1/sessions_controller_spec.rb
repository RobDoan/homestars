RSpec.describe 'Session', type: :request do

  describe '/users/sign_in' do
    let!(:user) { create(:user, password: 'test1234') }

    context 'when it is invalid credentials' do
      it 'returns unauthorized' do
        user_params = { email: 'invalid@invalid.com', password: 'invalid' }
        post user_session_url, params: { user: user_params }, as: :json
        expect(response).to have_http_status(:unauthorized)
      end
    end

    context 'login with valid credentials' do
      it 'return success auth response' do
        user_params = { email: user.email, password: 'test1234' }
        post user_session_url, params: { user: user_params }, as: :json
        json_response = JSON.parse(response.body)
        expect(response).to have_http_status(:ok)
        expect(json_response['token']).not_to be_empty
      end
    end
  end
end
