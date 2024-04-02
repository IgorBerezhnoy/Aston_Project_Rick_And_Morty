import React from 'react'
import { Provider } from 'react-redux'

import { App } from '@/App'
import { store } from '@/app/store/store'
import ReactDOM from 'react-dom/client'

import './styles/index.scss'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/700.css'

import { storeRTKQuery } from './service/store'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Provider store={storeRTKQuery}>
        <App />
      </Provider>
    </Provider>
  </React.StrictMode>
)
