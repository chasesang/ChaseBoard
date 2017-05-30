class MybookmarksController < ApplicationController

before_action :authenticate_user!

def index
  @bookmarks = Bookmark.all
end

end
