class MybookmarksController < ApplicationController

before_action :authenticate_user!

def index
  @bookmarks = Bookmark.all
end

def new
  @bookmark = Bookmark.new
end

def create
  @bookmark = Bookmark.new bookmark_params
  if @bookmark.save
    redirect_to user_mybookmarks_path
  else
    redirect_to user_mybookmarks_path
  end
end

private

def bookmark_params
  params.require(:bookmark).permit([:content, :user_id])
end

end
