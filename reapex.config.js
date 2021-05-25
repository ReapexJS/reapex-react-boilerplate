const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const federationConfig = require('./federation.config')

module.exports = function () {
  return {
    federation: federationConfig,
    webpack: {
      resolve: {
        alias: {
          'react-dom': '@hot-loader/react-dom',
        },
      },
    },
  }
}
