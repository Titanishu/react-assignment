import { observer } from 'mobx-react'
import React, { FC, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'

import { AppRouter } from './Core/AppRouter/AppRouter'
import { useRootStore } from './Core/RootStore/RootStoreContext'

const AppComponent: FC = () => {
  const store = useRootStore()
  const loading = store.loading

  /**
   * Load store.
   */
  useEffect(() => {
    store.load()
  }, [store])

  if (loading) {
    return <div>TODO: App loader</div>
  }

  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  )
}

export const App = observer(AppComponent)
