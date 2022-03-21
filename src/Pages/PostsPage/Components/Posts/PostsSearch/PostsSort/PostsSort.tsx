import React, { FC, useCallback } from 'react'

import { SortDirections } from '../../../../../../Domains/Assignment/Common/Api/enums'
import { usePostsPageController } from '../../../../Controller/PostsPageControllerContext'
import s from './PostsSort.module.scss'

export const PostsSort: FC = (_props) => {
  const controller = usePostsPageController()

  const handleASCClick = useCallback(() => {
    controller.handlePostsSortClick(SortDirections.ASC)
  }, [controller])
  const handleDESCClick = useCallback(() => {
    controller.handlePostsSortClick(SortDirections.DESC)
  }, [controller])

  return (
    <div className={s.PostsSort}>
      <button className={s.PostsSort__Button} onClick={handleASCClick}>
        ASC
      </button>
      <button className={s.PostsSort__Button} onClick={handleDESCClick}>
        DESC
      </button>
    </div>
  )
}
