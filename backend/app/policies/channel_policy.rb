# frozen_string_literal: true

class ChannelPolicy < ApplicationPolicy
  def index?
    true
  end

  def join?
    true
  end

  def joined_channels?
    true
  end
  def create?
    true
  end

  def update?
    current_user.id == record.creator_id
  end
end
