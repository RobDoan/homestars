if @message_builder.errors.empty?
  json.partial! 'message', message: @message_builder.message
else
  json.errors @message_builder.errors
end
