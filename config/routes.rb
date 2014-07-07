Rails.application.routes.draw do
  root to: "users#new"
  resources :users, only: [:new, :create, :show] 
  resources :solutions
  resource :session, only: [:new, :create, :destroy]

  resources :links
  resources :problems
  resources :solution_likes
  resource :repl
end
