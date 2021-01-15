# frozen_string_literal: true

module V1
  class SessionsController < Devise::SessionsController
    skip_before_action :verify_authenticity_token

    def create
      self.resource = warden.authenticate!(auth_options)
      bypass_sign_in(resource)
    end
  end
end
