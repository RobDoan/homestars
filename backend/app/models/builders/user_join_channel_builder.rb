# frozen_string_literal: true

module Builder
  class UserJoinChannel < Base
    attr_reader :user, :channel, :errors

    def initialize(user, channel)
      @errors = ActiveModel::Errors.new(self)
      @user = user
      @channel = channel
    end

    def perform
      perform! do
        perform_validation
      end
    end

    private

      def perform_validation
        check_if_user_had_joined
      end

      def check_if_user_had_joined
        errors.add(:channel, :already_joined) if user.joined?(channel)
      end
  end
end
