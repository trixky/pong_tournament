Rails.application.routes.draw do
  namespace :api do
    resources :tournaments
    resources :userstournament
    resources :matchs
    resources :bans
    resources :friendsmessages
    resources :battles
    resources :notifications
    resources :chatrooms
    resources :friends
    resources :userschatrooms
    resources :messages
    resources :users
    resources :oauth
    resources :log
    resources :guilds
    resources :flags
    resources :token
    resources :declarations
    resources :wars
    resources :twofactor
    resources :games
  end
  get '/connected/create_user' => 'pages#index'
  get '/connected/play' => 'pages#index'
  get '/connected/settings' => 'pages#index'
  get '/connected/guild' => 'pages#index'
  get '/connected/guild/create' => "pages#index"
  get '/connected/guild/join' => "pages#index"
  get '/connected/guild/manage' => "pages#index"
  get '/connected/tournament' => "pages#index"
  get '/admin' => "pages#index"
  get '/acces_denied' => "pages#index"
  get '/banned' => "pages#index"
  get '/twofactor' => "pages#index"
  get 'connected/game' => "pages#index"
  root 'pages#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
