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

const onShowBeer = (event) => {
  event.preventDefault()
  const form = event.target
  // console.log(form)
  // console.log('purple')
  const formData = getFormFields(form)
  // console.log(formData)
  // console.log('blue')
  api.showBeer(formData)
    .then(ui.showBeerSuccess)
    .catch(ui.showBeerFailure)
}

const onUpdateBeer = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.updateBeer(formData)
    .then(ui.updateBeerSuccess)
    .catch(ui.updateBeerFailure)
}

const onDestroyBeer = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.destroyBeer(formData)
    .then(ui.destroyBeerSuccess)
    .catch(ui.destroyBeerFailure)
}

const addHandlers = () => {
  $('#getBeersButton').on('click', onGetBeers)
  $('#clearBeersButton').on('click', onClearBeers)
  $('#create-beer').on('submit', onCreateBeer)
  $('#show-beer').on('submit', onShowBeer)
  $('#update-beer').on('submit', onUpdateBeer)
  $('#destroy-beer').on('submit', onDestroyBeer)
}

module.exports = {
  addHandlers
}
