import { AsyncDataStatus } from './enums'

/**
 * AsyncParticle.
 *
 * Data - Data type
 * Params - Request params.
 */
export interface AsyncParticle<Data, Params = unknown> {
  status: AsyncDataStatus
  data: Data | null
  error: Error | null
  params: Params | null
  updatedAt: number
}

/**
 * Async request function.
 */
export type AsyncRequest<Response> = () => Promise<Response>

/**
 * DoRequest request funtion.
 * For, for example, set loader, load data, remove loader".
 */
export type DoRequestFn<Data, Params = unknown> = (
  /** @link AsyncParticle **/
  particle: AsyncParticle<Data, Params>,
  /** @link AsyncRequest **/
  request: AsyncRequest<Data>,
  /** Request params **/
  params: AsyncParticle<Data, Params>['params'],
  /** Custom overrides **/
  override: DoRequestOverride<Data, Params>,
) => Promise<Data>

/**
 * Overrides.
 */
export interface DoRequestOverrideData<Data, Params> {
  /** @link DoRequestFn **/
  particle: Parameters<DoRequestFn<Data, Params>>[0]
  /** @link DoRequestFn **/
  request: Parameters<DoRequestFn<Data, Params>>[1]
  /** @link DoRequestFn **/
  params: Parameters<DoRequestFn<Data, Params>>[2]
}

/**
 * Inside request overrides.
 *
 * @link DoRequestFn
 */
export interface DoRequestOverride<Data, Params> {
  /** Before request **/
  before?: (data: DoRequestOverrideData<Data, Params>) => void
  /** Request success case **/
  success?: (data: DoRequestOverrideData<Data, Params>, response: Data) => void
  /** Request error case **/
  failed?: (data: DoRequestOverrideData<Data, Params>, error: unknown) => void
}
