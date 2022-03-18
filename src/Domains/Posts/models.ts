import { PostsService } from './Api/models'

export interface PostsStoreOptions {
  api: PostsService
  getToken: () => string
}
