import './scss/Reset.scss'
import './scss/Fonts.scss'
import './scss/Container.scss'
import './scss/App.scss'
import './scss/Menu.scss'
import './scss/Header.scss'
import './scss/News.scss'
import './scss/Search.scss'
import './scss/InputField.scss'
import './scss/ListAddresses.scss'

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
