# frozen_string_literal: true

module V1
  class MessagesController < BaseController

    def create
      @message_builder = Builders::MessageBuilder.new(current_user, channel, params)
      @message_builder.perform
    end

    protected

    def channel
      @channel ||= Channel.find_by(id: params[:channel_id])
    end

  end
end
