module Builders
  class MessageBuilder < Base
    attr_reader :user, :params, :channel, :errors, :message

    def initialize(user, channel, params)
      @channel = channel
      @params = params
      @user = user
      @errors = ActiveModel::Errors.new(self)
      @message = @channel.messages.build(message_attributes)
    end

    def perform
      perform! do
        @errors.merge!(@message.errors) unless (@errors.empty? && @message.save)
      end
    end

    private

    def message_attributes
      {
        content: params[:message],
        sender: user
      }
    end
  end
end
