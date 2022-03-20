import { observer } from 'mobx-react'
import React, { FC, FormEvent, useCallback } from 'react'

import { useLoginPageController } from '../../Controller/LoginPageControllerContext'
import { EmailInput } from './EmailInput/EmailInput'
import s from './LoginForm.module.scss'
import { NameInput } from './NameInput/NameInput'

const LoginFormComponent: FC = (_props) => {
  const controller = useLoginPageController()
  const submitDisabled = controller.submitDisabled
  const error = controller.registerError

  const handleSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault()

      void controller.handleFormSubmit()
    },
    [controller],
  )

  return (
    <form className={s.LoginForm} onSubmit={handleSubmit}>
      <h2 className={s.LoginForm__Title}>Login</h2>
      <NameInput />
      <EmailInput />
      <button disabled={submitDisabled} className={s.LoginForm__SubmitButton} type="submit">
        GO
      </button>
      {error}
    </form>
  )
}

export const LoginForm = observer(LoginFormComponent)
