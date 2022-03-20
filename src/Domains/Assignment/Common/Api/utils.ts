import { AssignmentApiError } from './models'

export const isAssignmentApiError = (arg: any): arg is AssignmentApiError => 'error' in arg
