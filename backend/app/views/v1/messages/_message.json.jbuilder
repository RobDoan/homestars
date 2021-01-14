json.(message, :id, :content)
json.sender do
  json.(message.sender, :id, :email)
end
