export interface BaseApiOptions {
  baseURL: string
}

export type ApiRequest<Params, Response> = (params: Params) => Promise<Response>
