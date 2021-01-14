# frozen_string_literal: true

json.(resource, :name)
json.users do
  json.array! resource.users do |user|
    json.(user, :id, :email)
  end
end
