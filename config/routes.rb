Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
root to:"static_pages#root"

  namespace :api, defaults: { format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :businesses, only: [:show, :create, :index]
    resources :reviews, only: [:show, :index, :create, :update, :destroy]
    resources :searches, only: [:index]
  end
end
