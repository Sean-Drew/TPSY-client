'use strict'

const showBeersTemplate = require('../templates/beer-listing.handlebars')

const getBeersSuccess = (data) => {
  // console.log(data)
  $('form').trigger('reset')
  // Enable a 1.5 sec info alert, pass in the text to be used.
  $('.alert-info').text('Showing All Beers').fadeTo(1000, 500).slideUp(500, function(){
    $('.alert-info').slideUp(500);
  })
  const showBeersHtml = showBeersTemplate({ beers: data.beers })
  $('.content').html(showBeersHtml)
}

const getBeersFailure = (error) => {
  // console.error(error)
  $('form').trigger('reset')
  // Enable a 1.5 sec error alert, pass in the text to be used.
  $('.alert-danger').text('Failed to List Beers').fadeTo(1000, 500).slideUp(500, function() {
    $('.alert-danger').slideUp(500);
  })
}

const createBeerSuccess = (data) => {
  // console.log(data)
  $('form').trigger('reset')
  // Enable a 1.5 sec info alert, pass in the text to be used.
  $('.alert-info').text('Created New Beer').fadeTo(1000, 500).slideUp(500, function(){
    $('.alert-info').slideUp(500);
  })
}

const createBeerFailure = (error) => {
  // console.error(error)
  $('form').trigger('reset')
  // Enable a 1.5 sec error alert, pass in the text to be used.
  $('.alert-danger').text('Failed to Create New Beer').fadeTo(1000, 500).slideUp(500, function(){
    $('.alert-danger').slideUp(500);
  })
}

const showBeerSuccess = (data) => {
  // console.log(data)
  $('form').trigger('reset')
  // Enable a 1.5 sec info alert, pass in the text to be used.
  $('.alert-info').text('Showing Selected Beer').fadeTo(1000, 500).slideUp(500, function(){
    $('.alert-info').slideUp(500);
  })
  const showById = showBeersTemplate({ beers: [data.beer] })
  $('.content').html(showById)
}

const showBeerFailure = (error) => {
  // console.error(error)
  $('form').trigger('reset')
  // Enable a 1.5 sec error alert, pass in the text to be used.
  $('.alert-danger').text('Failed to Show Selected Beer').fadeTo(1000, 500).slideUp(500, function(){
    $('.alert-danger').slideUp(500);
  })
}

const updateBeerSuccess = (data) => {
  // console.log(data)
  $('form').trigger('reset')
  // Enable a 1.5 sec info alert, pass in the text to be used.
  $('.alert-info').text('Beer Updated').fadeTo(1000, 500).slideUp(500, function(){
    $('.alert-info').slideUp(500);
  })
}

const updateBeerFailure = (error) => {
  // console.error(error)
  $('form').trigger('reset')
  // Enable a 1.5 sec error alert, pass in the text to be used.
  $('.alert-danger').text('Failed to Update Beer').fadeTo(1000, 500).slideUp(500, function(){
    $('.alert-danger').slideUp(500);
  })
}

const destroyBeerSuccess = (data) => {
  $('form').trigger('reset')
  $('.alert-info').text('Beer Deleted').fadeTo(1000, 500).slideUp(500, function(){
    $('.alert-info').slideUp(500);
  })
  // console.log(data)
  // Enable a 1.5 sec info alert, pass in the text to be used.
}

const destroyBeerFailure = (error) => {
  // console.error(error)
  $('form').trigger('reset')
  // Enable a 1.5 sec error alert, pass in the text to be used.
  $('.alert-danger').text('Failed to Delete Beer').fadeTo(1000, 500).slideUp(500, function(){
    $('.alert-danger').slideUp(500);
  })
}

const clearBeers = () => {
  $('.content').empty()
  $('form').trigger('reset')
  // Enable a 1.5 sec info alert, pass in the text to be used.
  $('.alert-info').text('Selection Cleared').fadeTo(1000, 500).slideUp(500, function(){
    $('.alert-info').slideUp(500);
  })
}

module.exports = {
  getBeersSuccess,
  getBeersFailure,
  createBeerSuccess,
  createBeerFailure,
  showBeerSuccess,
  showBeerFailure,
  updateBeerSuccess,
  updateBeerFailure,
  destroyBeerSuccess,
  destroyBeerFailure,
  clearBeers
}
