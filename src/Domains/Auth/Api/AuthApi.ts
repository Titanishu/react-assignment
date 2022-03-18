import { API_BASE } from '../../../Core/Consts/env'
import { AssignmentApi } from '../../Assignment/Common/Api/AssignmentApi'
import { AuthService, RegisterParams, RegisterResponse } from './models'

export class AuthApi extends AssignmentApi implements AuthService {
  constructor() {
    super({ baseURL: `${API_BASE}/assignment` })
  }

  public register = (params: RegisterParams): Promise<RegisterResponse> => {
    return this.request<RegisterResponse>('/register', {
      method: 'POST',
      body: JSON.stringify(params),
    })
  }
}
