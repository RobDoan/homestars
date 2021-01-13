# frozen_string_literal: true

Rails.application.routes.draw do
  devise_for :users,
             class_name: "User",
             module: "v1",
             format: :json

  namespace :v1, defaults: { format: :json } do
    resources :channels, only: [:create, :update, :index, :show] do
      resources :messages
      member do
        put :join
      end
    end
  end
end
