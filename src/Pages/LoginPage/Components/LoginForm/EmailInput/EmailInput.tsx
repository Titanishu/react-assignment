import { observer } from 'mobx-react'
import React, { FC, useCallback } from 'react'

import { CommonInput } from '../../../../../Common/Components/CommonInput/CommonInput'
import { useRootStore } from '../../../../../Core/RootStore/RootStoreContext'
import { useLoginPageController } from '../../../Controller/LoginPageControllerContext'

const EmailInputComponent: FC = (_props) => {
  const { auth } = useRootStore()
  const controller = useLoginPageController()

  const handleChange = useCallback(
    (newValue: string) => {
      controller.handleEmailChange(newValue)
    },
    [controller],
  )

  const value = auth.email

  return <CommonInput value={value} onChange={handleChange} title="Email" />
}

export const EmailInput = observer(EmailInputComponent)
