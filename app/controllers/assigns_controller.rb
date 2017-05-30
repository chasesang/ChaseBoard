class AssignsController < ApplicationController
  before_action :authenticate_user!, except [:index]

  def create
    @team = Team.find params[:team_id]
    task = Task.find params[:task_id]

    assign = Assign.new
    assign.task = task
    if assign.save
        redirect_to team_tasks_path(@team)
    else
        redirect_to team_tasks_path(@team)
    end
  end

  def destroy
  end




end
