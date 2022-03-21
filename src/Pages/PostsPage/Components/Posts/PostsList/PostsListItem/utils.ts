import format from 'date-fns/format'
import locale from 'date-fns/locale/en-US'

/**
 * Format date to human-readable format.
 */
export const formatDate = (date: string): string => {
  return format(new Date(date), 'MMMM d, uuuu kk:mm:ss', { locale })
}
