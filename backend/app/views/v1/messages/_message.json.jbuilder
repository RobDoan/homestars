json.(message, :id, :content)
json.is_mine current_user.id === message.sender_id
json.sender do
  json.(message.sender, :id, :email)
end
