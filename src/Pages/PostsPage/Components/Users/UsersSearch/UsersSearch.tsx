import { observer } from 'mobx-react'
import React, { FC, useCallback } from 'react'

import { CommonInput } from '../../../../../Common/Components/CommonInput/CommonInput'
import { usePostsPageController } from '../../../Controller/PostsPageControllerContext'
import s from './UsersSearch.module.scss'

const UsersSearchComponent: FC = (_props) => {
  const controller = usePostsPageController()
  const value = controller.usersSearch

  const handleChange = useCallback(
    (value: string) => {
      controller.handleUsersSearchChange(value)
    },
    [controller],
  )

  return (
    <div className={s.UsersSearch}>
      <CommonInput value={value} onChange={handleChange} placeholder="Search" />
    </div>
  )
}

export const UsersSearch = observer(UsersSearchComponent)
