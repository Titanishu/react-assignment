/**
 * Auth storage service.
 */
export interface AuthStorageService {
  getToken: () => string | undefined
  setToken: (value: string) => void
  getEmail: () => string | undefined
  setEmail: (value: string) => void
  getName: () => string | undefined
  setName: (value: string) => void
}
