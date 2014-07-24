Rails.application.routes.draw do
  root to: "site#root"
  resources :site, only: [:root]
  resources :users
  resource :session
  namespace :api, defaults: {format: :json} do
    resources :problems, except: [:edit, :new]
    resources :solutions, except: [:edit, :new]
    resources :solution_likes, only: [:create, :destroy]
    resources :users, only: [:show]
  end
end
