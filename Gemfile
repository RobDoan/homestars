# frozen_string_literal: true

source "https://rubygems.org"

ruby "2.7.2"

gem "rails", "~> 6.1.0"
gem "puma", "~> 5.0"
gem "rack-canonical-host"
gem "recipient_interceptor"
gem "redis", "~> 4.2"

gem "bootsnap", ">= 1.4.4", require: false

group :development, :test do
  gem "guard", "~> 2.16"
  gem "awesome_print"
  gem "pry-byebug"
  gem "pry-rails"
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
  gem "simplecov", "~> 0.20.0"
end

gem "tzinfo-data", platforms: [:mingw, :mswin, :x64_mingw, :jruby]

gem "jbuilder", "~> 2.10"
