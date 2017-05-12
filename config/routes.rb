Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get('/about' => 'about#index')
  get('/contact' => 'contact#index')

  resources :teams do
    # resources :tasks, shallow: true do
    resources :tasks do
      member do
        patch :complete
      end
    end
    resources :messages do
      resources :comments, only: [:create, :destroy, :edit, :update]
    end

  end



  resources :dashboard

  resources :users, only: [:new, :create]

    resources :sessions, only: [:new, :create] do
      delete :destroy, on: :collection
    end
  root 'dashboard#index'
end
