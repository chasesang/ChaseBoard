class MessagesController < ApplicationController
  before_action :authenticate_user!, except: [:index]
  before_action :find_team


  def index
    @newmessage = Message.new
    @messages = Message.all.order("created_at DESC")

  end

  def show
    @message = Message.find params[:id]
    @newcomment = @message.comments.new
    @comments = @message.comments

  end

  def new
    @message = Message.new
  end

  def create
    @message = @team.messages.create(message_params)
    @message.user = current_user

    if @message.save
      redirect_to team_messages_path(@team)
    else
      redirect_to team_messages_path(@team)

    end

  end

  def edit
    @message = Message.find params[:id]
  end

  def update
    @message = Message.find params[:id]
    if @message.update(message_params)
      redirect_to team_messages_path(@team)
    else
      render :edit
    end
  end

  def destroy
    @message = Message.find params[:id]
    @message.destroy
    redirect_to team_messages_path(@team)
  end

  private

  def find_team
    @team = Team.find params[:team_id]
  end


  def message_params
    params.require(:message).permit([:title, :description,{ tag_ids: [] }, {documents: []}])
  end



end
