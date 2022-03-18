import { BaseApiOptions } from './models'

export abstract class BaseApi {
  protected _baseURL: string

  constructor(options: BaseApiOptions) {
    const { baseURL } = options

    this._baseURL = baseURL
  }

  protected request<T>(input: RequestInfo, init?: RequestInit): Promise<T> {
    const inputParams =
      typeof input === 'string'
        ? `${this._baseURL}${input}`
        : {
            ...input,
            url: `${this._baseURL}${input.url}`,
          }

    const headers = {
      'Content-Type': 'application/json',
      ...init?.headers,
    }
    const initParams: RequestInit = {
      ...init,
      headers,
    }

    return fetch(inputParams, initParams)
      .then((result) => this.handleSuccess<T>(result, inputParams, initParams))
      .catch((error: unknown) => this.handleError(error, inputParams, initParams))
  }

  protected handleSuccess<T>(response: Response, _input: RequestInfo, _init?: RequestInit): Promise<T> {
    return response.json() as Promise<T>
  }
  protected handleError(error: unknown, _input: RequestInfo, _init?: RequestInit): never {
    throw error
  }
}
