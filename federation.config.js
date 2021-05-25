const deps = require('./package.json').dependencies

const config = {
  name: 'app1',
  filename: 'remoteEntry.js',
  exposes: {
    './User': './src/modules/User/User.component.tsx',
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
}

module.exports = config
