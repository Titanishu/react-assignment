import { makeAutoObservable } from 'mobx'

import { ROUTES } from '../../../Core/AppRouter/consts'
import { RootStore } from '../../../Core/RootStore/RootStore'
import { isAssignmentApiError } from '../../../Domains/Assignment/Common/Api/utils'
import { RegisterParams, RegisterResponse } from '../../../Domains/Auth/Api/models'
import { AsyncParticle, getAsyncParticle, isLoading } from '../../../Libs/doRequest'
import { mobxRequest } from '../../../Libs/mobxRequest'

export class LoginPageController {
  private readonly _root: RootStore

  private _register: AsyncParticle<RegisterResponse, RegisterParams>

  constructor(root: RootStore) {
    this._root = root

    this._register = getAsyncParticle()

    makeAutoObservable(this as this & { _root: ConstructorParameters<typeof LoginPageController>[0] }, { _root: false })
  }

  public get loading(): boolean {
    return isLoading(this._register)
  }

  public get submitDisabled(): boolean {
    if (isLoading(this._register)) {
      return true
    }

    // Name checks are on backend
    if (!this._root.auth.name) {
      return true
    }

    // Email checks are on backend
    if (!this._root.auth.email) {
      return true
    }

    return false
  }

  public get registerError(): string | undefined {
    const error = this._register.error

    if (!error) {
      return undefined
    }

    if (isAssignmentApiError(error)) {
      return error.error.message
    }

    if (error?.message) {
      return error.message
    }

    return 'Register error'
  }

  public handleEmailChange(value: string): void {
    this._root.auth.setEmail(value)
  }

  public handleNameChange(value: string): void {
    this._root.auth.setName(value)
  }

  public async handleFormSubmit(): Promise<void> {
    if (this.submitDisabled) {
      return
    }

    const name = this._root.auth.name
    const email = this._root.auth.email

    const params: RegisterParams = {
      client_id: 'ju16a6m81mhid5ue1z3v2g0uh',
      name,
      email,
    }
    const request = () => this._root.auth.requestRegister(params)

    try {
      const data = await mobxRequest(this._register, request, params)

      this._root.auth.setToken(data.sl_token)
      this._root.auth.setEmail(data.email)
      this._root.auth.setName(name)
      this._root.auth.save()

      this._root.navigate(ROUTES.POSTS.PATH)
    } catch (e: unknown) {
      // TODO: Log something somewhere
    }
  }
}
