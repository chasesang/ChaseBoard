class BroadcastRoomJob < ApplicationJob
  queue_as :default


    # 
    # def perform(chat)
    #   ActionCable.server.broadcast 'room_channel', render_chat(chat)
    # end
    #
    # private
    # def render_chat(chat)
    #   ApplicationController.renderer.render chat
    # end
  end
