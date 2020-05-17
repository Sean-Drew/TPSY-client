'use strict'

const config = require('../config')
const store = require('../store')

const signUpSuccess = function (data) {
  $('form').trigger('reset')
  // Enable a 1.5 sec success alert, pass in the text to be used.
  $('.alert-success').text('Sign-Up Success').fadeTo(1000, 500).slideUp(500, function(){
    $('.alert-success').slideUp(500);
  })
  // console.log('signUpSuccess ran. Data is:', data)
}

const signUpFailure = function (error) {
  $('form').trigger('reset')
  // Enable a 1.5 sec error alert, pass in the text to be used.
  $('.alert-danger').text('Sign-Up Failed').fadeTo(1000, 500).slideUp(500, function(){
    $('.alert-danger').slideUp(500);
  })
  // console.log('signUpFailure ran. Error is:', data)
}

const signInSuccess = function (data) {
  $('form').trigger('reset')
  // Enable a 1.5 sec success alert, pass in the text to be used.
  $('.alert-success').text('Sign-In Success').fadeTo(1000, 500).slideUp(500, function(){
    $('.alert-success').slideUp(500);
  })
  // console.log('signInSuccess ran. Data is:', data)
  store.user = data.user
  $('.authenticated').show()
  $('.unauthenticated').hide()
}

const signInFailure = function (error) {
  $('form').trigger('reset')
  // Enable a 1.5 sec error alert, pass in the text to be used.
  $('.alert-danger').text('Sign-In Failed').fadeTo(1000, 500).slideUp(500, function(){
    $('.alert-danger').slideUp(500);
  })
  // console.log('signInFailure ran. Error is:', data)
}

const changePasswordSuccess = function (data) {
  $('form').trigger('reset')
  // Enable a 1.5 sec success alert, pass in the text to be used.
  $('.alert-success').text('Password Changed').fadeTo(1000, 500).slideUp(500, function(){
    $('.alert-success').slideUp(500);
  })
  // console.log('changePasswordSuccess ran. Data is:', data)
}

const changePasswordFailure = function (error) {
  $('form').trigger('reset')
  // Enable a 1.5 sec error alert, pass in the text to be used.
  $('.alert-danger').text('Failed to Change Password').fadeTo(1000, 500).slideUp(500, function(){
    $('.alert-danger').slideUp(500);
  })
  // console.log('changePasswordFailure ran. Error is:', data)
}

const signOutSuccess = function (data) {
  // Enable a 1.5 sec success alert, pass in the text to be used.
  $('.alert-success').text('Signed Out').fadeTo(1000, 500).slideUp(500, function(){
    $('.alert-success').slideUp(500);
  })
  $('form').trigger('reset')
  // Empty out the content div on sign-out
  $('.content').html('')
  // console.log('signOutSuccess ran. Data is:', data)
  $('.authenticated').hide()
  $('.unauthenticated').show()
  store.user = null
}

const signOutFailure = function (error) {
  $('form').trigger('reset')
  // Enable a 1.5 sec error alert, pass in the text to be used.
  $('.alert-danger').text('Failed to Sign Out').fadeTo(1000, 500).slideUp(500, function(){
    $('.alert-danger').slideUp(500);
  })
  // console.log('signOutFailure ran. Error is:', data)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
