import React, { FC } from 'react'

import s from './Posts.module.scss'
import { PostsList } from './PostsList/PostsList'
import { PostsSearch } from './PostsSearch/PostsSearch'

export const Posts: FC = (_props) => {
  return (
    <section className={s.Posts}>
      <PostsSearch />
      <PostsList />
    </section>
  )
}
