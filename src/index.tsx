import './scss/reset.scss'
import './scss/fonts.scss'
import './scss/container.scss'
import './components/app/app.scss'
import './components/menu/menu.scss'
import './components/header/header.scss'
import './pages/news/news.scss'
import './components/search/search.scss'
import './components/input_field/input_field.scss'
import './components/list_addresses/list_addresses.scss'

import { createRoot } from 'react-dom/client'
import store from './store/store'
import { Provider } from 'react-redux'
import { App } from './components/app/App'

const container = document.querySelector('#root') as HTMLElement
const root = createRoot(container)

root.render(
  <Provider store={store}>
    <App></App>
  </Provider>
)
