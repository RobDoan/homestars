# frozen_string_literal: true

module V1
  class ChannelsController < BaseController
    inherit_resources
    defaults resource_class: Channel

    before_action :check_authorization

    def joined_channels
      @channels = current_user.participated_channels
    end

    def update
      update! do |success, failure|
        success.json { render json: resource }
        failure.json { render json: { errors: resource.errors } }
      end
    end

    def join
      current_user.join(resource)
    end

    protected

    def build_resource
      @channel ||= current_user.channels.build(permitted_params[:channel])
    end

    def permitted_params
      params.permit(channel: [:name])
    end

    def check_authorization
      model = collection_resource? ? Channel : resource
      authorize(model)
    end

    def collection_resource?
      super || %w(joined_channels).include?(action_name)
    end
  end
end
