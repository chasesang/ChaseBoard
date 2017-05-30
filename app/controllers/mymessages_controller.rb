class MymessagesController < ApplicationController
  before_action :authenticate_user!

  def index
    @user = current_user
    @messages = @user.messages.all

  end

end
