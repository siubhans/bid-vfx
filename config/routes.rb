Rails.application.routes.draw do

  # namespace :api do
  #   namespace :v1 do
  #     resources :bids
  #     resources :clients
  #   end
  # end

  root to: "home#index"
  
  get "clients", to: "api/v1/clients#index"
  get "clients/1", to: "api/v1/clients#show"
  post "clients", to: "api/v1/clients#create"
  put "clients/1", to: "api/v1/clients#update"
  delete "clients/1", to: "api/v1/clients#destroy"
  post "signin", to: "signin#create"
  post "refresh", controller: :refresh, action: :create 
  # post "signin", controller: :signin, action: :create
  post "signup", controller: :signup, action: :create
  delete "signin", to: "signin#destroy"
  
end