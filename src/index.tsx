import './Styles/global.scss'

import React from 'react'
import ReactDOM from 'react-dom'

import { App } from './App'
import { RootStoreProvider } from './Core/RootStore/RootStoreProvider'

ReactDOM.render(
  <React.StrictMode>
    <RootStoreProvider>
      <App />
    </RootStoreProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
