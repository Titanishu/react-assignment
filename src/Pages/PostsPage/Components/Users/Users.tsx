import React, { FC } from 'react'

import s from './Users.module.scss'
import { UsersList } from './UsersList/UsersList'
import { UsersSearch } from './UsersSearch/UsersSearch'

export const Users: FC = (_props) => {
  return (
    <section className={s.Users}>
      <UsersSearch />
      <UsersList />
    </section>
  )
}
