/**
 * Base "meta" interface for every response in assignment API.
 */
interface BaseMeta {
  request_id: string
}

/**
 * Every assignment response looks like this.
 */
export interface AssignmentApiResponse<Data, Meta = BaseMeta> {
  meta: Meta
  data: Data
}

/**
 * Every assignment error looks like this.
 */
export interface AssignmentApiError<Meta = BaseMeta> {
  meta: Meta
  error: { message: string }
}
