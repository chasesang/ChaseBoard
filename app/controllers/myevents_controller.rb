class MyeventsController < ApplicationController
  before_action :authenticate_user!

  def index
    @user = current_user
    @events = @user.events.all

  end
end
