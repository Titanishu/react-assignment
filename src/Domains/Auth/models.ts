import { AuthApiService } from './Api/models'
import { AuthStorageService } from './Storage/models'

export interface AuthStoreOptions {
  api: AuthApiService
  storage: AuthStorageService
}
