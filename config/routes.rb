Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do
      resources :bids
      resources :clients
    end
  end

  root to: "home#index"
end
