# frozen_string_literal: true

source "https://rubygems.org"

ruby "2.7.2"

gem "rails"
gem "puma", "~> 5.0"
gem 'rack-cors', require: 'rack/cors'
gem "rack-canonical-host"
gem "recipient_interceptor"
gem "redis", "~> 4.2"
gem "pg", "~> 1.2"
gem "bootsnap", ">= 1.4.4", require: false

group :development, :test do
  gem "guard", "~> 2.16"
  gem "awesome_print"
  gem "bullet"
  gem "debase"
  gem "ruby-debug-ide"
  gem "pry-byebug"
  gem "pry-rails"
  gem "faker", "~> 2.15"
  gem "factory_bot_rails"
  gem "shoulda-matchers"
end

group :development do
  gem "rubocop", "~> 1.6"
  gem "rubocop-performance", "~> 1.9"
  gem "rubocop-rails", "~> 2.9"
  gem "rubocop-rspec", "~> 2.1"
  gem "listen"
  gem "web-console"
end


group :test do
  gem "formulaic"
  gem "launchy"
  gem "timecop"
  gem "webmock"
  gem "guard-rspec", "~> 4.7"
  gem "rspec", "~> 3.10"
  gem "rspec-core", "~> 3.10"
  gem "rspec-expectations", "~> 3.10"
  gem "rspec-support", "~> 3.10"
  gem "rspec-mocks", "~> 3.10"
  gem "rspec-rails", "~> 4.0"
  gem "rails-controller-testing", "~> 1.0"
end

gem "tzinfo-data", platforms: [:mingw, :mswin, :x64_mingw, :jruby]

gem "jbuilder", "~> 2.10"

gem "devise"

gem "devise-jwt", "~> 0.8.0"

gem "responders", "~> 3.0"

gem "inherited_resources", "~> 1.12"
gem "has_scope", "~> 0.7.2"

gem "pundit", "~> 2.1"
