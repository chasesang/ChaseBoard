class DashboardController < ApplicationController

def index
  @teams = Team.all

end



end
