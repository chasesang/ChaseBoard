class RoomsController < ApplicationController
before_action :authenticate_user!
def index

  @chats = Chat.all

end



end
