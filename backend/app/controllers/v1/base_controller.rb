# frozen_string_literal: true

module V1
  class BaseController < ApplicationController
    skip_before_action :verify_authenticity_token
    respond_to :json

    before_action :authenticate_user!
  end
end
