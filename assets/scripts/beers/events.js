'use strict'

const getFormFields = require('../../../lib/get-form-fields')

const api = require('./api.js')
const ui = require('./ui.js')

const onClearBeers = (event) => {
  event.preventDefault()
  ui.clearBeers()
}

const onGetBeers = (event) => {
  event.preventDefault()
  api.getBeers()
    .then(ui.getBeersSuccess)
    .catch(ui.getBeersFailure)
}

const onCreateBeer = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.createBeer(formData)
    .then(ui.createBeerSuccess)
    .catch(ui.createBeerFailure)
}

const addHandlers = () => {
  $('#getBeersButton').on('click', onGetBeers)
  $('#clearBeersButton').on('click', onClearBeers)
  $('#create-beer').on('submit', onCreateBeer)
}

module.exports = {
  addHandlers
}
