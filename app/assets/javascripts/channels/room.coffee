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


  speak: (chat)->
    @perform 'speak', chat: chat
