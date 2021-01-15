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
      message_param = params.require(:message).permit(:content, :message_type)
      message_param.merge({ sender_id: user.id })
    end
  end
end
