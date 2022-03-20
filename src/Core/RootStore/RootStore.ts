import { makeAutoObservable } from 'mobx'

import { AuthApi } from '../../Domains/Auth/Api/AuthApi'
import { AuthStore } from '../../Domains/Auth/AuthStore'
import { AuthStorage } from '../../Domains/Auth/Storage/AuthStorage'

export class RootStore {
  public auth: AuthStore

  private _loading: boolean

  constructor() {
    this.auth = new AuthStore({ api: new AuthApi(), storage: new AuthStorage() })

    this._loading = true

    makeAutoObservable(this, { auth: false })
  }

  /**
   * Is app loading?
   */
  public get loading(): boolean {
    return this._loading
  }

  /**
   * Load app.
   */
  public load() {
    this.auth.load()

    this._loading = false
  }
}
