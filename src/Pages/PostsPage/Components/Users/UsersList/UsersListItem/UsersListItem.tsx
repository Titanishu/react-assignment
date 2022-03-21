import clsx from 'clsx'
import { observer } from 'mobx-react'
import React, { FC } from 'react'

import { User } from '../../../../Controller/models'
import s from './UsersListItem.module.scss'

interface Props {
  user: User
  onClick: (user: User) => void
  selected?: boolean
}

const UsersListItemComponent: FC<Props> = (props) => {
  const { user, selected, onClick } = props
  const { name, messagesCount } = user

  const messages = messagesCount > 9 ? '9+' : messagesCount

  const classes = clsx({
    [s.UsersListItem]: true,
    [s['UsersListItem--Selected']]: selected,
  })

  const handleClick = () => onClick(user)

  return (
    <li className={classes} onClick={handleClick}>
      <p className={s.UsersListItem__Name}>{name}</p>
      <div className={s.UsersListItem__Badge}>{messages}</div>
    </li>
  )
}

export const UsersListItem = observer(UsersListItemComponent)
