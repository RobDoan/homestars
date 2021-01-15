# frozen_string_literal: true

module V1
  class MessagesController < BaseController

    def index
      @messages = channel.messages.includes(:sender)
    end

    def create
      @message_builder = Builders::MessageBuilder.new(current_user, channel, params)
      @message_builder.perform
      if !@message_builder.errors.empty?
        render json: { errors: @message_builder.errors }, status: 422
      end
    end

    protected

    def channel
      @channel ||= Channel.find_by(id: params[:channel_id])
    end

  end
end
