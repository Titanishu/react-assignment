import { ApiRequest } from '../../../Core/Api/models'
import { PostTypes } from './enums'

/**
 * Post entity.
 */
export interface Post {
  id: string
  from_name: string
  from_id: string
  message: string
  type: PostTypes
  created_time: string
}

/**
 * Get posts request params.
 */
export interface GetPostsParams {
  sl_token: string
  page: number
}

/**
 * Get posts request response.
 */
export interface GetPostsResponse {
  page: number
  posts: Post[]
}

/**
 * Posts service.
 */
export interface PostsService {
  getPosts: ApiRequest<GetPostsParams, GetPostsResponse>
}
