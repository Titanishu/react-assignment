import { createContext, useContext } from 'react'

import { RootStore } from './RootStore'

/**
 * Root store context.
 * No default value provided.
 */
export const RootStoreContext = createContext<RootStore>(undefined as unknown as RootStore)

/**
 * Root store context.
 */
export const useRootStore = () => useContext(RootStoreContext)
