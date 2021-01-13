# frozen_string_literal: true

module V1
  class BaseController < ApplicationController
    respond_to :json

    before_action :authenticate_user!
  end
end
