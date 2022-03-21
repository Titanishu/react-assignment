import { PostsService } from './Api/models'

/**
 * Posts store options.
 */
export interface PostsStoreOptions {
  api: PostsService
  getToken: () => string
}
