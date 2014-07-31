Rails.application.routes.draw do
  root to: "site#root"
  resources :site, only: [:root]
  resources :users
  resource :session
  namespace :api, defaults: {format: :json} do
    resources :problems, except: [:edit, :new] do
      resources :solutions, only: [:index]
    end
    resources :solutions, except: [:edit, :new] do
      resources :comments, only: [:index]
    end
    resources :solution_likes, only: [:create, :destroy]
    resources :users, only: [:create, :show] do
      resources :comments, only: [:index]
    end

    resource :session, only: [:create, :destroy, :show]
    resources :comments, only: [:create, :show] do
      resources :comments, only: [:index]
    end
  end
end
