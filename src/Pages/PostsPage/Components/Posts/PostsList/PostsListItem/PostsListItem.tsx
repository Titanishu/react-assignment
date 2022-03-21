import { observer } from 'mobx-react'
import React, { FC } from 'react'

import { Post } from '../../../../../../Domains/Posts/Api/models'
import s from './PostsListItem.module.scss'
import { formatDate } from './utils'

interface Props {
  post: Post
}

const PostsListItemComponent: FC<Props> = (props) => {
  const { post } = props
  const { message, created_time } = post

  const title = formatDate(created_time)

  return (
    <li className={s.PostsListItem}>
      <div className={s.PostsListItem__Title}>{title}</div>
      <p>{message}</p>
    </li>
  )
}

export const PostsListItem = observer(PostsListItemComponent)
