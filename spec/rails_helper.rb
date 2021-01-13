# frozen_string_literal: true
require 'spec_helper'

if ENV["COVERAGE"]
  require "simplecov"
  SimpleCov.start "rails"
end

require "rubygems"
require "webmock/rspec"

ENV["RAILS_ENV"] ||= "test"

require File.expand_path("../../config/environment", __FILE__)

abort("The Rails environment is running in production mode!") if Rails.env.production?

require "rspec/rails"

module TestSetup
  extend self

  def setup
    disable_net_connect!
  end

  def allow_net_connect!
    WebMock.allow_net_connect!
  end

  def disable_net_connect!
    WebMock.disable_net_connect!(allow_localhost: true)
  end
end

Dir[Rails.root.join("spec/support/**/*.rb")].each { |f| require f }

# The shoulda-matchers gem no longer detects the test framework
# you're using or mixes itself into that framework automatically.
Shoulda::Matchers.configure do |config|
  config.integrate do |with|
    with.test_framework :rspec
    with.library :active_record
    with.library :active_model
  end
end

begin
  ActiveRecord::Migration.check_pending!
rescue ActiveRecord::PendingMigrationError
  raise "There are pending migrations, run RAILS_ENV=test bin/rake db:migrate"
end

RSpec.configure do |config|
  config.include Devise::Test::ControllerHelpers, type: :controller
  config.include Devise::Test::IntegrationHelpers, type: :request
  config.include Warden::Test::Helpers
  config.include FactoryBot::Syntax::Methods

  config.fail_fast = ENV["RSPEC_FAIL_FAST"] == "1"
  config.silence_filter_announcements = ENV["RSPEC_SILENCE_FILTER_ANNOUNCEMENTS"] == "1"
  config.use_transactional_fixtures = true

  config.before(:suite) do
    TestSetup.setup
  end

  config.after :each do |x|
    ActionMailer::Base.deliveries.clear
  end
end
