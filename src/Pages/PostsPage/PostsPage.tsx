import { observer } from 'mobx-react'
import React, { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { ROUTES } from '../../Core/AppRouter/consts'
import { useQuery } from '../../Core/AppRouter/hooks/useQuery'
import { useRootStore } from '../../Core/RootStore/RootStoreContext'
import { Posts } from './Components/Posts/Posts'
import { Users } from './Components/Users/Users'
import { PostsPageController } from './Controller/PostsPageController'
import { PostsPageControllerContext } from './Controller/PostsPageControllerContext'
import s from './PostsPage.module.scss'

const PostsPageComponent: FC = (_props) => {
  const root = useRootStore()
  const [controller] = useState<PostsPageController>(() => new PostsPageController(root))
  const { page } = useParams<'page'>()
  const query = useQuery()

  const user_id = query.get(ROUTES.POSTS.QUERY_PARAMS.user_id)

  /**
   * If we have "user_id" query param then set it.
   */
  useEffect(() => {
    if (user_id) {
      void controller.handleSelectUserId(user_id)
    }
  }, [controller, user_id])

  const showLoading = controller.loading
  const error = controller.getPostsError

  /**
   * Request posts when page loaded.
   */
  useEffect(() => {
    void controller.getPosts(Number(page) || 1)
  }, [controller, page])

  if (showLoading) {
    return <main>loading...</main>
  }

  if (error) {
    return <main>{error}</main>
  }

  return (
    <PostsPageControllerContext.Provider value={controller}>
      <main className={s.PostsPage}>
        <Users />
        <Posts />
      </main>
    </PostsPageControllerContext.Provider>
  )
}

export const PostsPage = observer(PostsPageComponent)
