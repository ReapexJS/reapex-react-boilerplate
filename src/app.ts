import { App } from 'reapex'

const middlewares = []

if (process.env.NODE_ENV === 'development') {
  const { logger } = require('redux-logger')
  middlewares.push(logger)
}

export const app = new App({
  middlewares,
})
