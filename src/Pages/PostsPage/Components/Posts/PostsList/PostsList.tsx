import { observer } from 'mobx-react'
import React, { FC } from 'react'

import { usePostsPageController } from '../../../Controller/PostsPageControllerContext'
import s from './PostsList.module.scss'
import { PostsListItem } from './PostsListItem/PostsListItem'

const PostsListComponent: FC = (_props) => {
  const controller = usePostsPageController()
  const posts = controller.posts

  const Posts = posts.map((post) => {
    const key = post.id

    return <PostsListItem key={key} post={post} />
  })

  return <ul className={s.PostsList}>{Posts}</ul>
}

export const PostsList = observer(PostsListComponent)
