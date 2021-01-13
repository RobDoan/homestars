# frozen_string_literal: true

class ApplicationPolicy
  attr_reader :user_context, :record

  def initialize(user_context, record)
    @user_context = user_context
    @record = record
  end

  def current_user
    user_context.user
  end

  def index?
    false
  end

  def show?
    scope.exists?(id: record.id)
  end

  def create?
    false
  end

  def update?
    false
  end

  def edit?
    update?
  end

  def destroy?
    false
  end

  def scope
    Pundit.policy_scope!(user_context, record.class)
  end

  class Scope
    attr_reader :user_context, :scope

    def initialize(user_context, scope)
      @user_context = user_context
      @scope = scope
    end

    def resolve
      scope
    end
  end
end
