'use strict'

const { resolve } = require('path')

module.exports = {
  entry: resolve('index.js'),

  output: {
    path: '.',
    filename: 'bundle.js'
  },

  module: {
    rules: [{
      test: /\.txt$/,
      use: 'raw-loader'
    }]
  }
}