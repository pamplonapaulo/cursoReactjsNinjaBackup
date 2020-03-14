'use strict'

const webpackConfig = require('@kadira/storybook/dist/server/config/defaults/webpack.config.js')

module.exports = function (config, env) {
  const newConfig = webpackConfig(config, env)

  newConfig.module.preLoaders = (newConfig.module.preLoaders || []).concat({
    test: /\.js$/,
    exclude: /node_modules/,
    include: /src/,
    loader: 'standard'
  })

  newConfig.module.loaders = newConfig.module.loaders.map(loader => {

    if (!loader.test.test('test.css')) {
      return loader
    }
  
    return {
      ...loader,
      loaders: ['style', 'css?modules']
    }  
  })

  return newConfig
}
