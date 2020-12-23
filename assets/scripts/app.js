'use strict'

const authEvents = require('./auth/events')
const beerEvents = require('./beers/events')

$(() => {
  // extra .submit and preventDefault + toggle is to make BS modal disappear on submit.
  $('#sign-up').on('submit', authEvents.onSignUp).submit(function (event) {
    event.preventDefault()
    $('#sign-up-modal').modal('toggle')
  })
  $('#sign-in').on('submit', authEvents.onSignIn).submit(function (event) {
    event.preventDefault()
    $('#sign-in-modal').modal('toggle')
  })
  $('#change-password').on('submit', authEvents.onChangePassword).submit(function (event) {
    event.preventDefault()
    $('#change-password-modal').modal('toggle')
  })
  $('#sign-out').on('submit', authEvents.onSignOut)
  beerEvents.addHandlers()
})
