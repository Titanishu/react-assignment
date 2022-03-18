import React, { FC } from 'react'

import { RootStoreProvider } from './Core/RootStore/RootStoreProvider'

export const App: FC = () => {
  return <RootStoreProvider>App</RootStoreProvider>
}
