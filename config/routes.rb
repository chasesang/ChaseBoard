Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get('/about' => 'about#index')
  get('/contact' => 'contact#index')

  resources :teams do
    resources :tasks
  end


  resources :users, only: [:new, :create]

    resources :sessions, only: [:new, :create] do
      delete :destroy, on: :collection
    end
  root 'dashboard#index'
end
