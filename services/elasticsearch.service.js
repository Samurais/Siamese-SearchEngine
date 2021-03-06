/**
 * ELK Suite Service
 */
const config = require('../config/environment'),
  logger = require('./logging.service').getLogger('elasticsearch.service'),
  elasticsearch = require('elasticsearch'),
  Q = require('q'),
  _ = require('lodash')

const client = new elasticsearch.Client({
  host: config.elasticsearch.host,
  httpAuth: config.elasticsearch.httpAuth,
  log: 'error',
  apiVersion: '5.0',
  maxRetries: 3,
  // for importing big data
  // requestTimeout: 30000 * 2 * 30,
  requestTimeout: 30000,
  keepAlive: false,
  defer: function () {
    return Q.defer()
  }
})

exports = module.exports = client
