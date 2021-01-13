# TODO: implement revoke jwt token using redis
class RevokeJwtRedisStrategy
  include Singleton
  attr_reader :redis

  def initialize
    #  Redis connection
  end

  def jwt_revoked?(payload, user)
    return false
  end

  def revoke_jwt(payload, user)
  end

end
