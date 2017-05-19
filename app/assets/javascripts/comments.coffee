# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/
$(document).ready ->

  # ------------------------------------------------------
  # pretty-fy the upload field
  # ------------------------------------------------------
  $realInputField = $('#comment_documents')

  # drop just the filename in the display field
  $realInputField.change ->
    $('#file-display').val $(@).val().replace(/^.*[\\\/]/, '')

  # trigger the real input field click to bring up the file selection dialog
  $('#upload-btn').click ->
    $realInputField.click()
