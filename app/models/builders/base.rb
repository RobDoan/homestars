# frozen_string_literal: true

module Builders
  class Base
    extend ActiveModel::Callbacks
    extend ActiveModel::Naming

    define_model_callbacks :perform

    def self.human_attribute_name(attr, options = {})
      attr
    end

    def perform
      run_callbacks :perform do
        perform_validation
        yield
      end
    end

    alias_method :perform!, :perform

    def perform_validation
      true
    end
  end
end
