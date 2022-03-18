import { AuthApi } from '../../Domains/Auth/Api/AuthApi'
import { AuthStore } from '../../Domains/Auth/AuthStore'

export class RootStore {
  public auth: AuthStore

  constructor() {
    this.auth = new AuthStore({ api: new AuthApi() })
  }
}
