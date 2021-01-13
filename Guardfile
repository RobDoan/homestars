# frozen_string_literal: true

guard :rspec, cmd: "bundle exec rspec", failed_mode: :focus, ll_on_start: false, all_after_pass: false do
  directories %w[app config lib spec]
  watch("spec/spec_helper.rb") { "spec" }
  watch("spec/rails_helper.rb") { "spec" }
  watch("config/routes.rb") { "spec/routing" }
  watch("app/controllers/application_controller.rb") { "spec/controllers" }
  watch(%r{^spec/.+_spec\.rb$})
  watch(%r{^app/(.+)\.rb$}) { |m| "spec/#{m[1]}_spec.rb" }
  watch(%r{^app/(.*)(\.erb|\.haml|\.slim)$}) { |m| "spec/#{m[1]}#{m[2]}_spec.rb" }
  watch(%r{^lib/(.+)\.rb$}) { |m| "spec/lib/#{m[1]}_spec.rb" }
  watch(%r{^app/controllers/(.+)_(controller)\.rb$}) { |m| ["spec/controllers/#{m[1]}_spec.rb"] }
end
