import { BaseStorage } from '../../../Core/Storage/BaseStorage'
import { AuthStorageKeys } from './enums'
import { AuthStorageService } from './models'

export class AuthStorage extends BaseStorage implements AuthStorageService {
  constructor() {
    super('auth')
  }

  getToken = () => this.getItem(AuthStorageKeys.TOKEN)
  setToken = (value: string) => this.setItem(AuthStorageKeys.TOKEN, value)

  getEmail = () => this.getItem(AuthStorageKeys.EMAIL)
  setEmail = (value: string) => this.setItem(AuthStorageKeys.EMAIL, value)

  getName = () => this.getItem(AuthStorageKeys.NAME)
  setName = (value: string) => this.setItem(AuthStorageKeys.NAME, value)
}
