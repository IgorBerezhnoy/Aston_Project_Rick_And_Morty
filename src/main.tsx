import React from 'react'
import { Provider } from 'react-redux'

import { App } from '@/App'
import { store } from '@/app/store'
import ReactDOM from 'react-dom/client'

import './styles/index.scss'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/700.css'

import { storeRTKQuery } from './app/store'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={storeRTKQuery}>
      <Provider store={store}>
        <App />
      </Provider>
    </Provider>
  </React.StrictMode>
)
