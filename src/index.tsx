import { app } from './app'
import { Counter } from './modules/Counter/Counter.component'

const container = document.createElement('div')
container.setAttribute('id', 'my-app-root')

document.body.appendChild(container)

app.render(Counter, container)
