import { makeAutoObservable } from 'mobx'
import { NavigateFunction, NavigateOptions, To } from 'react-router-dom'

import { AuthApi } from '../../Domains/Auth/Api/AuthApi'
import { AuthStore } from '../../Domains/Auth/AuthStore'
import { AuthStorage } from '../../Domains/Auth/Storage/AuthStorage'
import { PostsApi } from '../../Domains/Posts/Api/PostsApi'
import { PostsStore } from '../../Domains/Posts/PostsStore'

export class RootStore {
  public readonly auth: AuthStore
  public readonly posts: PostsStore
  // TODO: Should be a Store, but for simplicity this test task...
  private _navigate: NavigateFunction | null

  private _loading: boolean

  constructor() {
    this.auth = new AuthStore({ api: new AuthApi(), storage: new AuthStorage() })
    this.posts = new PostsStore({ api: new PostsApi(), getToken: () => this.auth.getToken() })
    this._navigate = null

    this._loading = true

    makeAutoObservable(this, { auth: false, navigate: false })
  }

  /**
   * Is app loading?
   */
  public get loading(): boolean {
    return this._loading
  }

  public navigate(to: To, options?: NavigateOptions) {
    if (!this._navigate) {
      return
    }

    this._navigate(to, options)
  }

  public setNavigate(navigate: NavigateFunction | null) {
    this._navigate = navigate
  }

  /**
   * Load app.
   */
  public load() {
    this.auth.load()

    this._loading = false
  }
}
