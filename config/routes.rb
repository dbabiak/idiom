Rails.application.routes.draw do
  root to: "users#new"
  resources :users, only: [:new, :create] 
  resources :solutions
  resource :session, only: [:new, :create, :destroy]

  resources :links
  resources :problems
  resource :repl
end
