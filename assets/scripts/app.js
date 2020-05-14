'use strict'

const authEvents = require('./auth/events')

$(() => {
  //     vv    auth events     vv    //
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  //     ^^    auth events     ^^    //
})
