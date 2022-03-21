import { createContext, useContext } from 'react'

import { LoginPageController } from './LoginPageController'

/**
 * Login page controller.
 * No default value.
 */
export const LoginPageControllerContext = createContext<LoginPageController>(
  undefined as unknown as LoginPageController,
)

/**
 * Use login page controller.
 */
export const useLoginPageController = () => useContext(LoginPageControllerContext)
