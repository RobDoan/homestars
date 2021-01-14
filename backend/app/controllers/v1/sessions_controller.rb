# frozen_string_literal: true

module V1
  class SessionsController < Devise::SessionsController
    def create
      self.resource = warden.authenticate!(auth_options)
      bypass_sign_in(resource)
      render json: { token: resource.access_token }
    end
  end
end
