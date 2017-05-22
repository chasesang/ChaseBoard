class RoomsController < ApplicationController
  before_action :authenticate_user!
 def show
   @chats = Chat.all
   @locations = Location.all
 end
end
