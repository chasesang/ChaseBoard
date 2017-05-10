class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def user_signed_in?
    if session[:user_id].present?
      return true if User.exists?(id: session[:user_id])
      session[:user_id] = nil
    end
  end
  helper_method :user_signed_in?

  def authenticate_user!
    redirect_to root_path unless user_signed_in?
  end

  def current_user
    @current_user ||= User.find session[:user_id] if user_signed_in?
  end
  helper_method :current_user
end
