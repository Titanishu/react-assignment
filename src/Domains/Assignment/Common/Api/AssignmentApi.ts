import { BaseApi } from '../../../../Core/Api/BaseApi'
import { AssignmentApiResponse } from './models'

/**
 * Assignment API abstract class.
 */
export abstract class AssignmentApi extends BaseApi {
  /**
   * Custom success handler.
   */
  protected handleSuccess<T>(response: Response, input: RequestInfo, init?: RequestInit): Promise<T> {
    return super.handleSuccess(response, input, init).then((result: unknown) => {
      return (result as AssignmentApiResponse<T>).data
    })
  }

  /**
   * Custom success handler.
   *
   * TODO: Here we should catch some more important errors
   *  like outdated token and call some handlers or so.
   *  BUT: Server responds with code 500 and without proper headers =>
   *  we get CORS error and cannot parse the body :(
   */
  protected handleError(error: unknown, input: RequestInfo, init?: RequestInit): never {
    return super.handleError(error, input, init)
  }
}
