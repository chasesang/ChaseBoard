class CommentsController < ApplicationController
before_action :authenticate_user!, except: [:index]
before_action :find_message

def create
  @comment = @message.comments.create(comment_params)
  @comment.user = current_user

  if @comment.save
    redirect_to team_message_path(@message.team, @message), notice:'Comment Created!'
  else
    redirect_to team_message_path(@message.team, @message), alert: 'Something went wrong!'
  end
end

def edit
  @comment = @message.comments.find(params[:id])
end

def update
  @comment = @message.comments.find(params[:id])
  if @comment.update(comment_params)
    redirect_to team_message_path(@message.team, @message), notice:'Comment updated!'
  else
    render 'edit'
  end
end

def destroy
  @comment = @message.comments.find(params[:id])
  if  @comment.destroy
    redirect_to team_message_path(@message.team, @message)
  end

end



private

def comment_params
	params.require(:comment).permit(:content, {documents: []})
end

def find_message
	@message = Message.find(params[:message_id])
end

end
