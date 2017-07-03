class MydocumentsController < ApplicationController

  before_action :authenticate_user!
  def index
    @user = current_user
    @documents = @user.documents

  end
end
