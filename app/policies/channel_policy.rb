class ChannelPolicy < ApplicationPolicy

  def index?
    true
  end

  def create?
    true
  end

  def update?
    current_user.id == record.creator_id
  end

end
