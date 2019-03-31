Rails.application.routes.draw do
  post   '/login',   to: 'sessions#create'
  delete '/logout',  to: 'sessions#destroy'
  get '/add/:ticker', to: 'companies#create'
  resources :companies, only: [:index, :create, :show]
  post '/users', to: 'users#create'
end
