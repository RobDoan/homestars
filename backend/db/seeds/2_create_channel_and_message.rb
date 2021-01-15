admin_user = User.find_by(email: 'admin@example.com')
10.times do
  Channel.create(name: Faker::Name.name, creator: admin_user)
end

channel = Channel.first
admin_user.join(channel)

30.times do
  offset = rand(User.count)
  random_user = User.offset(offset).first
  random_user.join(channel) unless random_user.joined?(channel)
  channel.messages.create(sender: random_user,
                          content: Faker::Quote.famous_last_words)
end
