json.array! @channels do |channel|
  json.partial! 'channel', channel: channel
end
