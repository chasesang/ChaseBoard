class EventsController < ApplicationController
before_action :authenticate_user!, except: [:index]
before_action :find_team

def new
  @event = Event.new
end
def index
  @events = Event.all
  @event = Event.new
end

def create
  @event = Event.create event_params

  @event.user = current_user

  if @event.save
    redirect_to team_events_path(@team), notice: 'Event created!'
  else
    redirect_to team_events_path(@team), alert: @event.errors.full_messages.join(', ')
  end

end

def edit

  @event = Event.find params[:id]
end

def update
  @event = Event.find params[:id]
  if @event.update(event_params)
    redirect_to team_events_path(@team), notice: 'Event updated!'
  else
    redirect_to team_events_path(@team), alert: @event.errors.full_messages.join(', ')
  end
end

def destroy
  @event = Event.find params[:id]
  @event.destroy
  redirect_to team_events_path(@team), notice: 'Event deleted!'
end





private

def find_team
  @team = Team.find params[:team_id]
end


def event_params
  params.require(:event).permit([:name, :body, :start_time, :end_time, :user_id])
end


end
