import { BaseApi } from '../../../../Core/Api/BaseApi'
import { AssignmentApiResponse } from './models'

export abstract class AssignmentApi extends BaseApi {
  protected handleSuccess<T>(response: Response, _input: RequestInfo, _init?: RequestInit): Promise<T> {
    return super.handleSuccess(response, _input, _init).then((result: unknown) => {
      return (result as AssignmentApiResponse<T>).data
    })
  }
}
