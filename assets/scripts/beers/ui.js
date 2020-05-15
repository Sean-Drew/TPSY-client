'use strict'

const showBeersTemplate = require('../templates/beer-listing.handlebars')

const getBeersSuccess = (data) => {
  console.log(data)
  $('#message').text('Beers Shown Successfully!')
  $('#message').removeClass()
  $('#message').addClass('success')
  const showBeersHtml = showBeersTemplate({ beers: data.beers })
  $('.content').html(showBeersHtml)
}

const getBeersFailure = (error) => {
  console.error(error)
  $('#message').text('Failed to list beers.')
  $('#message').removeClass()
  $('#message').addClass('failure')
}

const clearBeers = () => {
  $('.content').empty()
  $('#message').text('Cleared beer selection.')
  $('#message').removeClass()
  $('#message').addClass('success')
}

module.exports = {
  getBeersSuccess,
  getBeersFailure,
  clearBeers
}
