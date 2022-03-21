/**
 * Base API Options.
 */
export interface BaseApiOptions {
  /** baseURL @example https://api.localhost **/
  baseURL: string
}

/**
 * Api request method.
 */
export type ApiRequest<Params, Response> = (params: Params) => Promise<Response>
