import { ApiRequest } from '../../../Core/Api/models'

/**
 * Register request params.
 */
export interface RegisterParams {
  client_id: string
  email: string
  name: string
}

/**
 * Register request response.
 */
export interface RegisterResponse {
  sl_token: string
  client_id: string
  email: string
}

/**
 * Auth API Service.
 */
export interface AuthApiService {
  register: ApiRequest<RegisterParams, RegisterResponse>
}
