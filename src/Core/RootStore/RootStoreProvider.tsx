import { FC, ReactNode, useState } from 'react'

import { RootStore } from './RootStore'
import { RootStoreContext } from './RootStoreContext'

interface Props {
  children: ReactNode
}

/**
 * Root store provider.
 */
export const RootStoreProvider: FC<Props> = (props) => {
  const { children } = props

  const [store] = useState<RootStore>(() => new RootStore())

  return <RootStoreContext.Provider value={store}>{children}</RootStoreContext.Provider>
}
