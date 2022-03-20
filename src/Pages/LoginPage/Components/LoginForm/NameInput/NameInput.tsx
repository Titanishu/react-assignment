import { observer } from 'mobx-react'
import React, { FC, useCallback } from 'react'

import { CommonInput } from '../../../../../Common/Components/CommonInput/CommonInput'
import { useRootStore } from '../../../../../Core/RootStore/RootStoreContext'
import { useLoginPageController } from '../../../Controller/LoginPageControllerContext'

const NameInputComponent: FC = (_props) => {
  const { auth } = useRootStore()
  const controller = useLoginPageController()

  const handleChange = useCallback(
    (newValue: string) => {
      controller.handleNameChange(newValue)
    },
    [controller],
  )

  const value = auth.name

  return <CommonInput value={value} onChange={handleChange} title="Name" />
}

export const NameInput = observer(NameInputComponent)
