import { AuthApiService } from './Api/models'
import { AuthStorageService } from './Storage/models'

/**
 * Auth store options.
 */
export interface AuthStoreOptions {
  api: AuthApiService
  storage: AuthStorageService
}
