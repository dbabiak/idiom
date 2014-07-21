Rails.application.routes.draw do
  root to: "site#index"
  resources :site, only: [:index]
  resources :users, only: [:create, :new, :show]
  resource :session, only: [:create, :destroy, :new, ]
  namespace :api, default: {format: :json} do
    resources :problems, except: [:edit, :new]
    resources :solutions, except: [:edit, :new]
    resources :solution_likes, only: [:create, :destroy]
  end
end
