import { makeAutoObservable } from 'mobx'

import { getNumbersComparator, getStringsComparator } from '../../../Common/Utils/SortUtils'
import { RootStore } from '../../../Core/RootStore/RootStore'
import { SortDirections } from '../../../Domains/Assignment/Common/Api/enums'
import { isAssignmentApiError } from '../../../Domains/Assignment/Common/Api/utils'
import { GetPostsParams, GetPostsResponse, Post } from '../../../Domains/Posts/Api/models'
import { AsyncParticle, getAsyncParticle, isLoading } from '../../../Libs/doRequest'
import { mobxRequest } from '../../../Libs/mobxRequest'
import { User } from './models'

export class PostsPageController {
  private readonly _root: RootStore

  private _getPosts: AsyncParticle<GetPostsResponse, GetPostsParams>
  private _postsSort: SortDirections

  private _usersSearch: string
  private _postsSearch: string
  private _selectedUserId: string | undefined

  constructor(root: RootStore) {
    this._root = root

    this._getPosts = getAsyncParticle()

    this._postsSort = SortDirections.ASC

    this._usersSearch = ''
    this._postsSearch = ''
    this._selectedUserId = undefined

    makeAutoObservable(this as this & { _root: ConstructorParameters<typeof PostsPageController>[0] }, { _root: false })
  }

  public get users(): User[] {
    const users = [...this.filteredUsersList]
    const sortFn = getStringsComparator<User>((user) => user.name, SortDirections.ASC)

    return users.sort(sortFn)
  }

  public get posts(): Post[] {
    const sort = this._postsSort
    const posts = [...this.filteredPostsList]
    const sortFn = getNumbersComparator<Post>((post) => new Date(post.created_time).getTime(), sort)

    return posts.sort(sortFn)
  }

  public get usersSearch(): string {
    return this._usersSearch
  }

  public get postsSearch(): string {
    return this._postsSearch
  }

  public get selectedUserId(): string | undefined {
    return this._selectedUserId
  }

  public get postsSort(): SortDirections {
    return this._postsSort
  }

  public get loading(): boolean {
    return isLoading(this._getPosts)
  }

  public get getPostsError(): string | undefined {
    const error = this._getPosts.error

    if (!error) {
      return undefined
    }

    if (isAssignmentApiError(error)) {
      return error.error.message
    }

    if (error?.message) {
      return error.message
    }

    return 'Get posts error'
  }

  public handleUsersSearchChange(value: string) {
    this._usersSearch = value
  }

  public handlePostsSearchChange(value: string) {
    this._postsSearch = value
  }

  public handleSelectUserId(id: string) {
    this._selectedUserId = id
  }

  public handleUserClick(user: User) {
    this._selectedUserId = user.id
  }

  public handlePostsSortClick(sort: SortDirections) {
    this._postsSort = sort
  }

  public async getPosts(page = 1): Promise<void> {
    const params = { page }
    const request = () => this._root.posts.requestPosts(page)

    try {
      await mobxRequest(this._getPosts, request, params)
    } catch (_e: unknown) {
      // TODO: Log something somewhere
    }
  }

  private get filteredPostsList(): Post[] {
    if (!this._postsSearch) {
      return this.selectedUserPostsList
    }

    return this.selectedUserPostsList.filter((post) => post.message.includes(this._postsSearch))
  }

  private get selectedUserPostsList(): Post[] {
    if (!this._selectedUserId) {
      return []
    }

    return this.postsList.filter((post) => post.from_id === this._selectedUserId)
  }

  private get postsList(): Post[] {
    return this._getPosts.data?.posts || []
  }

  private get filteredUsersList(): User[] {
    if (!this._usersSearch) {
      return this.usersList
    }

    const searchRegex = new RegExp(this._usersSearch, 'i')

    return this.usersList.filter((user) => searchRegex.exec(user.name))
  }

  private get usersList(): User[] {
    const map: Record<string, User> = {}
    const posts = this.postsList

    for (const post of posts) {
      if (map[post.from_id]) {
        map[post.from_id].messagesCount++

        continue
      }

      const id = post.from_id
      const name = post.from_name

      map[id] = { id, name, messagesCount: 1 }
    }

    return Object.values(map)
  }
}
