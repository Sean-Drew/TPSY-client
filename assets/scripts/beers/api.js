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

module.exports = {
  getBeers,
  createBeer
}
