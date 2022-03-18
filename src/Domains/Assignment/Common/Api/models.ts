interface BaseMeta {
  request_id: string
}

export interface AssignmentApiResponse<Data, Meta = BaseMeta> {
  meta: Meta
  data: Data
}
