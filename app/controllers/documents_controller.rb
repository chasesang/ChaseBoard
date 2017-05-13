class DocumentsController < ApplicationController
def index
@team = Team.find params[:team_id]
@messages = @team.messages
@tasks = @team.tasks



end



end
