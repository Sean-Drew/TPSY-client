'use strict'

const config = require('../config')
const store = require('../store')

const getBeers = function () {
  return $.ajax({
    url: config.apiUrl + '/beers',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const createBeer = function (data) {
  return $.ajax({
    url: config.apiUrl + '/beers',
    method: 'POST',
    data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const showBeer = function (data) {
  // console.log(data)
  // console.log('green')
  return $.ajax({
    url: config.apiUrl + '/beers/' + data.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateBeer = function (data) {
  return $.ajax({
    url: config.apiUrl + '/beers/' + data.id,
    method: 'PATCH',
    data: {
      beer: data
    },
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const destroyBeer = function (data) {
  return $.ajax({
    url: config.apiUrl + '/beers/' + data.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  getBeers,
  createBeer,
  showBeer,
  updateBeer,
  destroyBeer
}
