import { makeAutoObservable } from 'mobx'

import { RegisterParams, RegisterResponse } from './Api/models'
import { AuthStoreOptions } from './models'

export class AuthStore {
  protected _authToken: string | undefined
  protected _email: string | undefined
  protected _name: string | undefined

  protected _options: AuthStoreOptions

  constructor(options: AuthStoreOptions) {
    this._options = options

    this._authToken = undefined
    this._email = undefined
    this._name = undefined

    makeAutoObservable(this as this & { _options: ConstructorParameters<typeof AuthStore>[0] }, { _options: false })
  }

  /**
   * Authentication token.
   */
  public get token(): string | undefined {
    return this._authToken
  }

  /**
   * Is user authenticated or not.
   */
  public get authenticated(): boolean {
    return Boolean(this._authToken)
  }

  /**
   * Authentication name.
   */
  public get name(): string | undefined {
    return this._name
  }

  /**
   * Authentication email.
   */
  public get email(): string | undefined {
    return this._email
  }

  /**
   * Request register method.
   *
   * @param params Request params.
   */
  public async requestRegister(params: RegisterParams): Promise<RegisterResponse> {
    try {
      const data = await this._options.api.register(params)

      return data
    } catch (e: unknown) {
      // TODO: Log something somewhere
      console.error(e)

      throw e
    }
  }

  /**
   * Save current info to persistent storage.
   */
  public save() {
    if (this._authToken) {
      this._options.storage.setToken(this._authToken)
    }

    if (this._name) {
      this._options.storage.setName(this._name)
    }

    if (this._email) {
      this._options.storage.setEmail(this._email)
    }
  }

  /**
   * Load current info from persistent storage.
   */
  public load() {
    this._authToken = this._options.storage.getToken() || undefined
    this._name = this._options.storage.getName() || undefined
    this._email = this._options.storage.getEmail() || undefined
  }
}
