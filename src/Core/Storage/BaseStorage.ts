/**
 * Base abstract storage class.
 * Default implementation is localStorage.
 */
export abstract class BaseStorage {
  protected _prefix: string

  protected constructor(prefix: string) {
    this._prefix = prefix
  }

  protected getItem(key: string): string | undefined {
    return localStorage.getItem(`${this._prefix}${key}`) ?? undefined
  }

  protected setItem(key: string, value: string | undefined): void {
    const savedKey = `${this._prefix}${key}`

    if (value === undefined) {
      localStorage.removeItem(savedKey)
    } else {
      localStorage.setItem(savedKey, value)
    }
  }
}
