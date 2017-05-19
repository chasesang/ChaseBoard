class RoomsController < ApplicationController
  before_action :authenticate_user!
 def show
   @chats = Chat.all
  
 end
end
