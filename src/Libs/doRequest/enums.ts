/**
 * Async data status.
 *
 * IDLE - Initial status.
 * FETCHING - Fetching data.
 * UPDATING - Updating already fetched data.
 * SUCCESS - Loading success.
 * FAILED - Loading failed.
 */
export const enum AsyncDataStatus {
  IDLE = 'IDLE',
  FETCHING = 'FETCHING',
  UPDATING = 'UPDATING',
  SUCCESS = 'SUCCESS',
  FAILED = 'FAILED',
}
