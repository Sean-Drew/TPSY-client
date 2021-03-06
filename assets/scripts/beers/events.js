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
  $('#create-beer').on('submit', onCreateBeer).submit(function (event) {
    event.preventDefault()
    $('#create-beer-modal').modal('toggle')
  })
  $('#show-beer').on('submit', onShowBeer).submit(function (event) {
    event.preventDefault()
    $('#show-beer-modal').modal('toggle')
  })
  $('#update-beer').on('submit', onUpdateBeer).submit(function (event) {
    event.preventDefault()
    $('#update-beer-modal').modal('toggle')
  })
  $('#destroy-beer').on('submit', onDestroyBeer).submit(function (event) {
    event.preventDefault()
    $('#destroy-beer-modal').modal('toggle')
  })
}

module.exports = {
  addHandlers
}
