class TeamsController < ApplicationController

def new
  @team = Team.new
end

def create
  @team = Team.new team_params
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
