class NearbyTeamsController < ApplicationController

  def index

  cookies[:lng] = params[:lng] if params[:lng]
  cookies[:lat] = params[:lat] if params[:lat]
  @users = User.near([params[:lat], params[:lng]], 50, units: :km)
  @markers = Gmaps4rails.build_markers(@users) do |user, marker|
                marker.lat user.latitude
                marker.lng user.longitude
                marker.infowindow user.first_name
              end
end
end
