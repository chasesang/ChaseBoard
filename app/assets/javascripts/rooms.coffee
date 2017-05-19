# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/
$ ->
  $chats = $('#chats')
  $chats.scrollTop $chats.prop('scrollHeight')
  $('#chat_input').focus()

$(document).on 'keypress', '#chat_input', (e) ->
  if e.keyCode == 13 and e.target.value
    App.room.speak(e.target.value)
    e.target.value = ''
    e.preventDefault()
