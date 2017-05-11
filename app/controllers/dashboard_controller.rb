class DashboardController < ApplicationController

def index

  @teams = Team.all
  if user_signed_in?
  @tasks = Task.where(:user_id => current_user.id).order("created_at DESC")
  @user = current_user
  else
  redirect_to new_session_path
  end
end



end
