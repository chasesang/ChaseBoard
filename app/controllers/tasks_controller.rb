class TasksController < ApplicationController
before_action :authenticate_user!, except: [:index]
before_action :find_team, only: [:index, :create, :edit, :update]


def new
  @task = current_user.tasks.build

end


def index
  if user_signed_in?
  @task = Task.new
  @tasks = @team.tasks.all.order("created_at DESC")
end
end

def show
  @task = Task.find params[:id]
end



def create
  @task = @team.tasks.create task_params
  @task.team = @team
  @task.user = current_user
  if @task.save
    redirect_to team_tasks_path(@team)
  else
      redirect_to team_tasks_path(@team)
    end

end

def edit

  @task = Task.find params[:id]

end



def update
    @task = Task.find params[:id]
  if @task.update(task_params)
  redirect_to team_tasks_path(@task.team)
else
  render :edit
end

end

def destroy
  @task = Task.find params[:id]
  @task.destroy
  redirect_to team_tasks_path(@task.team)
end

def complete
  @task = Task.find params[:id]
  @task.update_attribute(:completed_at, Time.now)
  redirect_to team_tasks_path(@task.team)
end


private

def find_team
  @team = Team.find params[:team_id]
end


def task_params
  params.require(:task).permit([:body])
end

end
