'use strict'

const api = require('./api.js')
const ui = require('./ui.js')

const onGetBeers = (event) => {
  event.preventDefault()
  api.getBeers()
    .then(ui.getBeersSuccess)
    .catch(ui.getBeersFailure)
}

const onClearBeers = (event) => {
  event.preventDefault()
  ui.clearBeers()
}

const addHandlers = () => {
  $('#getBeersButton').on('click', onGetBeers)
  $('#clearBeersButton').on('click', onClearBeers)
}

module.exports = {
  addHandlers
}
