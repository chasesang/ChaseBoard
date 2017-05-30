App.room = App.cable.subscriptions.create "RoomChannel",
  connected: ->
    # Called when the subscription is ready for use on the server

  disconnected: ->
    # Called when the subscription has been terminated by the server

  received: (data) ->
    # Called when there's incoming data on the websocket for this channel
    console.log(data)
    # if (data.msg)
    $('#chats').append data + "<br>"
    $chats = $('#chats')
    $chats.scrollTop $chats.prop('scrollHeight')
    # if (data.location)
    # draw markers if user_ids are the ones we are interested in
      # handler = Gmaps.build('Google');
      # handler.buildMap({ provider: {}, internal: {id: 'map'}}, function(){
      # markers = handler.addMarkers(<%=raw @markers.to_json %>);
      # handler.bounds.extendWith(markers);
      # handler.fitMapToBounds();
      # handler.getMap().setZoom(10);
      # });

  speak: (chat)->
    @perform 'speak', chat: chat

  # sendLocation: (location)->
  #   @perform 'set_location', locaion: {lat: lat, lng: lng}
