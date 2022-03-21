import { API_BASE } from '../../../Core/Consts/env'
import { AssignmentApi } from '../../Assignment/Common/Api/AssignmentApi'
import { GetPostsParams, GetPostsResponse, PostsService } from './models'

/**
 * Posts API.
 */
export class PostsApi extends AssignmentApi implements PostsService {
  constructor() {
    super({ baseURL: `${API_BASE}/assignment` })
  }

  /**
   * Get posts.
   *
   * @param params Request params.
   */
  public getPosts = (params: GetPostsParams): Promise<GetPostsResponse> => {
    const query = `?${new URLSearchParams({
      ...params,
      page: String(params.page),
    }).toString()}`

    return this.request<GetPostsResponse>(`/posts${query}`, {
      method: 'GET',
    })
  }
}
