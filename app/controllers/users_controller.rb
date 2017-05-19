class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def index
    @team = Team.find params[:team_id]
    @teamusers = @team.users.all
  end

  def create
    @user = User.new user_params
    if @user.save
      session[:user_id] = @user.id
      cookies.signed[:user_id] = @user.id
      redirect_to root_path, notice: 'Thank you for signing up'
    else
      render :new
    end
  end

  private

  def user_params
    params.require(:user).permit([:first_name,
                                  :last_name,
                                  :email,
                                  :password,
                                  :password_confirmation,
                                  :address])
  end
end
