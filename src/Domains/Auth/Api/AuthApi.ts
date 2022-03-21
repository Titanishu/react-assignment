import { API_BASE } from '../../../Core/Consts/env'
import { AssignmentApi } from '../../Assignment/Common/Api/AssignmentApi'
import { AuthApiService, RegisterParams, RegisterResponse } from './models'

/**
 * Auth API.
 * Overriding constructor with default baseURL.
 */
export class AuthApi extends AssignmentApi implements AuthApiService {
  constructor() {
    super({ baseURL: `${API_BASE}/assignment` })
  }

  /**
   * Register user.
   *
   * @param params Request params.
   */
  public register = (params: RegisterParams): Promise<RegisterResponse> => {
    return this.request<RegisterResponse>('/register', {
      method: 'POST',
      body: JSON.stringify(params),
    })
  }
}
