import 'react-hot-loader'

import { app } from './app'
import App from './Root'

const container = document.createElement('div')
container.setAttribute('id', 'my-app-root')

document.body.appendChild(container)

app.render(App, container)
