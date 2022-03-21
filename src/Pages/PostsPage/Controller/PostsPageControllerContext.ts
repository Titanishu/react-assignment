import { createContext, useContext } from 'react'

import { PostsPageController } from './PostsPageController'

/**
 * Posts page controller.
 * No default value.
 */
export const PostsPageControllerContext = createContext<PostsPageController>(
  undefined as unknown as PostsPageController,
)

export const usePostsPageController = () => useContext(PostsPageControllerContext)
