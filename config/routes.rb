Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do
      resources :bids
      resources :clients
    end
  end

  root to: "home#index"
  
  get "clients", to: "api/v1/clients#index"
  get "clients/:id", to: "api/v1/clients#show"
  post "clients", to: "api/v1/clients#create"
  patch "clients/:id", to: "api/v1/clients#update"
  delete "clients/:id", to: "api/v1/clients#destroy"
  get "bids", to: "api/v1/bids#index"
  get "userClients", to: "api/v1/clients#user"
  get "bids/:id", to: "api/v1/bids#show"
  post "bids", to: "api/v1/bids#create"
  patch "bids/:id", to: "api/v1/bids#update"
  delete "bids/:id", to: "api/v1/bids#destroy"
  post "signin", to: "signin#create"
  post "refresh", controller: :refresh, action: :create 
  post "users", to: "signin#show"
  post "signup", controller: :signup, action: :create
  delete "signin", controller: :signin, action: :destroy
  
end