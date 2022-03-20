import { runInAction } from 'mobx'

import {
  AsyncDataStatus,
  AsyncParticle,
  AsyncRequest,
  doRequest,
  DoRequestOverride,
  DoRequestOverrideData,
} from '../doRequest'

const defaultBefore: DoRequestOverride<unknown, unknown>['before'] = <Data, Params>(
  part: DoRequestOverrideData<Data, Params>,
) => {
  runInAction(() => {
    const { particle, params } = part

    if (particle.data === null) {
      particle.status = AsyncDataStatus.FETCHING
    } else {
      particle.status = AsyncDataStatus.UPDATING
    }

    if (!params) {
      particle.params = null
    } else {
      particle.params = {
        ...params,
      }
    }
  })
}

const defaultSuccess: DoRequestOverride<unknown, unknown>['success'] = <Data, Params>(
  data: DoRequestOverrideData<Data, Params>,
  response: Data,
) => {
  runInAction(() => {
    const { particle } = data

    particle.status = AsyncDataStatus.SUCCESS
    particle.data = response
    particle.updatedAt = Date.now()
    particle.error = null
  })
}

const defaultFailed: DoRequestOverride<unknown, unknown>['failed'] = <Data, Params>(
  data: DoRequestOverrideData<Data, Params>,
  error: unknown,
) => {
  runInAction(() => {
    const { particle } = data

    particle.status = AsyncDataStatus.FAILED
    particle.error = error as Error
  })
}

/**
 * MobX store async request.
 *
 * @param particle State particle.
 * @param request Request.
 * @param params Request params.
 * @param override Overrides.
 */
export const mobxRequest = async <Data, Params = unknown>(
  particle: AsyncParticle<Data, Params>,
  request: AsyncRequest<Data>,
  params: AsyncParticle<Data, Params>['params'],
  override: DoRequestOverride<Data, Params> = {},
): Promise<Data> => {
  const customOverride = {
    before: defaultBefore,
    success: defaultSuccess,
    failed: defaultFailed,
    ...override,
  }

  return doRequest<Data, Params>(particle, request, params, customOverride)
}
