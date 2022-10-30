import './scss/reset.scss'
import './scss/fonts.scss'
import './scss/container.scss'
import './scss/app.scss'
import './scss/menu.scss'
import './scss/header.scss'
import './scss/news.scss'
import './scss/search.scss'
import './scss/input_field.scss'
import './scss/listAddresses.scss'

import { createRoot } from 'react-dom/client'
import store from './store/store'
import { Provider } from 'react-redux'
import { App } from './components/App'

const container = document.querySelector('#root') as HTMLElement
const root = createRoot(container)

root.render(
  <Provider store={store}>
    <App></App>
  </Provider>
)
