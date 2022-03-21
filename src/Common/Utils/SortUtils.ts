import { SortDirections } from '../../Domains/Assignment/Common/Api/enums'

export const getStringsComparator = <T>(getValue: (value: T) => string, direction: SortDirections) => {
  if (direction === SortDirections.ASC) {
    return (a: T, b: T) => getValue(a).localeCompare(getValue(b), 'en', { sensitivity: 'base' })
  } else {
    return (a: T, b: T) => getValue(b).localeCompare(getValue(a), 'en', { sensitivity: 'base' })
  }
}

export const getNumbersComparator = <T>(getValue: (value: T) => number, direction: SortDirections) => {
  if (direction === SortDirections.ASC) {
    return (a: T, b: T) => getValue(a) - getValue(b)
  } else {
    return (a: T, b: T) => getValue(b) - getValue(a)
  }
}
