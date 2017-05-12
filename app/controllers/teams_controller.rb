class TeamsController < ApplicationController
before_action :authenticate_user!, except: [:index]
def new
  @team = Team.new
end

def create
  @team = Team.new team_params
  if @team.save
  redirect_to dashboard_index_path, notice: 'team created!'
else
  redirect_to dashboard_index_path, alert: 'something went wrong'
end
end

def index

  @teams = Team.all
end

def show
  @team = Team.find params[:id]
  @task = Task.new
  @users = @team.users
  @tasks = @team.tasks.all
end


private

def team_params
  params.require(:team).permit([:title, :description])
end

end
