import './scss/reset.scss'
import './scss/fonts.scss'
import './scss/container.scss'
import './scss/App.scss'
import './scss/Menu.scss'
import './scss/Header.scss'
import './scss/News.scss'

import { createRoot } from 'react-dom/client'
import { Profiler } from 'react'
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
