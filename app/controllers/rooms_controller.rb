class RoomsController < ApplicationController

def index
  @chats = Chat.all
end



end
