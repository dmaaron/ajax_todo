Ajaxtodo::Application.routes.draw do
  root :to => 'home#index'
  resources :tasks do
  	member do 
  		put :increase_urgency 
  		put :decrease_urgency
  	end
  end
  
  resources :priorities 
end

