const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const deps = require('./package.json').dependencies

module.exports = function () {
  return {
    webpack: {
      resolve: {
        alias: {
          'react-dom': '@hot-loader/react-dom',
        },
      },
      plugins: [
        new ModuleFederationPlugin({
          name: 'counter',
          filename: 'remoteEntry.js',
          remotes: {},
          exposes: {
            './Counter': './src/modules/Counter/Counter.component.tsx',
          },
          shared: [
            {
              ...deps,
              react: {
                singleton: true,
                requiredVersion: deps.react,
              },
              'react-dom': {
                singleton: true,
                requiredVersion: deps['react-dom'],
              },
            },
          ],
        }),
      ],
    },
  }
}
