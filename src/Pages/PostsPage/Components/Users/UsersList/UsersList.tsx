import { observer } from 'mobx-react'
import React, { FC, useCallback } from 'react'

import { User } from '../../../Controller/models'
import { usePostsPageController } from '../../../Controller/PostsPageControllerContext'
import s from './UsersList.module.scss'
import { UsersListItem } from './UsersListItem/UsersListItem'

const UsersListComponent: FC = (_props) => {
  const controller = usePostsPageController()
  const users = controller.users
  const selectedUserId = controller.selectedUserId

  const handleUserClick = useCallback(
    (user: User) => {
      controller.handleUserClick(user)
    },
    [controller],
  )

  const Users = users.map((user) => {
    const key = user.id
    const selected = selectedUserId === user.id

    return <UsersListItem key={key} user={user} selected={selected} onClick={handleUserClick} />
  })

  return <ul className={s.UsersList}>{Users}</ul>
}

export const UsersList = observer(UsersListComponent)
