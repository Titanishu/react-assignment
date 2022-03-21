import React, { FC, useState } from 'react'

import { useRootStore } from '../../Core/RootStore/RootStoreContext'
import { LoginForm } from './Components/LoginForm/LoginForm'
import { LoginPageController } from './Controller/LoginPageController'
import { LoginPageControllerContext } from './Controller/LoginPageControllerContext'
import s from './LoginPage.module.scss'

export const LoginPage: FC = (_props) => {
  const root = useRootStore()
  const [controller] = useState<LoginPageController>(() => new LoginPageController(root))

  return (
    <LoginPageControllerContext.Provider value={controller}>
      <main className={s.LoginPage}>
        <LoginForm />
      </main>
    </LoginPageControllerContext.Provider>
  )
}
