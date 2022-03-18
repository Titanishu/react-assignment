import { ApiRequest } from '../../../Core/Api/models'
import { PostTypes } from './enums'

export interface Post {
  id: string
  from_name: string
  from_id: string
  message: string
  type: PostTypes
  created_time: string
}

export interface GetPostsParams {
  sl_token: string
  page: number
}

export interface GetPostsResponse {
  page: number
  posts: Post[]
}

export interface PostsService {
  getPosts: ApiRequest<GetPostsParams, GetPostsResponse>
}
