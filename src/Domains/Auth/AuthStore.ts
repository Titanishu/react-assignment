import { makeAutoObservable } from 'mobx'

import { RegisterParams, RegisterResponse } from './Api/models'
import { AuthStoreOptions } from './models'

export class AuthStore {
  protected _authToken: string | undefined
  protected _options: AuthStoreOptions

  constructor(options: AuthStoreOptions) {
    this._options = options

    this._authToken = undefined

    makeAutoObservable(this as this & { _options: ConstructorParameters<typeof AuthStore>[0] }, { _options: false })
  }

  /**
   * Authentication token.
   */
  public get token(): string | undefined {
    return this._authToken
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
}
