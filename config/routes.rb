Rails.application.routes.draw do
  
  root to: "users#new"
  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]

  resources :links
  resources :problems
  resource :repl
end
