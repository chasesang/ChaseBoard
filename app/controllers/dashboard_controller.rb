class DashboardController < ApplicationController

def index
  if user_signed_in?
  @teams = Team.all
  @tasks = Task.where(:user_id => current_user.id).order("created_at DESC")
end
end



end
