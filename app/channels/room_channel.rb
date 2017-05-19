class RoomChannel < ApplicationCable::Channel
  def subscribed
    stream_from "room_channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def speak(data)
    #
    # ActionCable.server.broadcast 'room_channel', msg: data['chat']
      Chat.create content: data['chat'], user_id: current_user.id
  end
end
