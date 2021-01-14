# frozen_string_literal: true

class ApplicationController < ActionController::Base
  include Pundit

  PunditUser = Struct.new(:user, :ip)

  rescue_from ActiveRecord::RecordNotFound, with: :render_record_not_found
  rescue_from Pundit::NotAuthorizedError, with: :render_unauthorized

  private

    def render_record_not_found
      render json: { error: "Resource could not be found" }, status: :not_found
    end

    def render_unauthorized
      render json: { error: "You are not authorized to perform this action" }, status: :unauthorized
    end

    def pundit_user
      PunditUser.new(current_user, request.remote_ip)
    end

    def collection_resource?
      %w(index new create).include?(action_name)
    end
end
