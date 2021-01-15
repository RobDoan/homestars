# frozen_string_literal: true

json.(resource, :id, :name)
json.users do
  json.array! resource.users do |user|
    json.(user, :id, :email)
  end
end
