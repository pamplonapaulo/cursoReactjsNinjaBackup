'use strict'

const path = require('path')

module.exports = {
    devtool: 'sourcemap',

    entry: path.join(__dirname, 'src', 'index'),
    
    output: {
        path:path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        // publicPath: '/static/'
        publicPath: '/dist/'
    },

    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            include: /src/,
            loader: 'babel'
        }]
    }
}