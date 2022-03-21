import { AssignmentApiError } from './models'

/**
 * Typeguard: is this value an assignment error or not.
 *
 * @param arg value.
 */
export const isAssignmentApiError = (arg: any): arg is AssignmentApiError => 'error' in arg
