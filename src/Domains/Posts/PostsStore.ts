import { makeAutoObservable } from 'mobx'

import { GetPostsParams, GetPostsResponse } from './Api/models'
import { PostsStoreOptions } from './models'

export class PostsStore {
  private _options: PostsStoreOptions

  constructor(options: PostsStoreOptions) {
    this._options = options

    makeAutoObservable(this as this & { _options: ConstructorParameters<typeof PostsStore>[0] }, { _options: false })
  }

  /**
   * Request posts method.
   *
   * @param page Page number.
   */
  public async requestPosts(page = 1): Promise<GetPostsResponse> {
    try {
      const sl_token = this._options.getToken()

      const params: GetPostsParams = {
        sl_token,
        page,
      }

      const data = await this._options.api.getPosts(params)

      return data
    } catch (e: unknown) {
      // TODO: Log something somewhere
      console.error(e)

      throw e
    }
  }
}
