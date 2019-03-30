Rails.application.routes.draw do
  post   '/login',   to: 'sessions#create'
  delete '/logout',  to: 'sessions#destroy'
  get '/search/:name', to: 'companies#search'
  resources :companies, only: [:index, :create, :show]
  resources :users
end
