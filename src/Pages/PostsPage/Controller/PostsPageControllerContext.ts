import { createContext, useContext } from 'react'

import { PostsPageController } from './PostsPageController'

/**
 * Posts page controller.
 * No default value.
 */
export const PostsPageControllerContext = createContext<PostsPageController>(
  undefined as unknown as PostsPageController,
)

/**
 * Use posts page controller.
 */
export const usePostsPageController = () => useContext(PostsPageControllerContext)
