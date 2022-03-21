import { observer } from 'mobx-react'
import React, { FC, useCallback } from 'react'

import { CommonInput } from '../../../../../Common/Components/CommonInput/CommonInput'
import { usePostsPageController } from '../../../Controller/PostsPageControllerContext'
import s from './PostsSearch.module.scss'
import { PostsSort } from './PostsSort/PostsSort'

const PostsSearchComponent: FC = (_props) => {
  const controller = usePostsPageController()
  const value = controller.postsSearch

  const handleChange = useCallback(
    (value: string) => {
      controller.handlePostsSearchChange(value)
    },
    [controller],
  )

  return (
    <div className={s.PostsSearch}>
      <PostsSort />
      <CommonInput value={value} onChange={handleChange} placeholder="Search" />
    </div>
  )
}

export const PostsSearch = observer(PostsSearchComponent)
