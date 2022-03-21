import './Styles/global.scss'

import React from 'react'
import ReactDOM from 'react-dom'

import { App } from './App'
import { RootStoreProvider } from './Core/RootStore/RootStoreProvider'
import { bootstrap } from './utils'

const root = document.getElementById('root')

void bootstrap(root).then(() => {
  ReactDOM.render(
    <React.StrictMode>
      <RootStoreProvider>
        <App />
      </RootStoreProvider>
    </React.StrictMode>,
    root,
  )
})
