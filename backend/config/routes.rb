# frozen_string_literal: true

Rails.application.routes.draw do
  devise_for :users,
             class_name: "User",
             module: "v1",
             format: :json

  namespace :v1, defaults: { format: :json } do
    get :my_profile, to: 'my_profile#show'
    resources :channels, only: [:create, :update, :index, :show] do
      resources :messages, only: [:create, :index]
      member do
        put :join
      end
      collection  do
        get :joined_channels
      end
    end
  end
end
