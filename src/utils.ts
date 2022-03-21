import { configure } from 'mobx'

export const bootstrap = async (rootElement: HTMLElement | null): Promise<void> => {
  // TODO: Init polyfills
  // TODO: Custom unexpected error handler and/or Sentry

  configure({
    enforceActions: 'always',
    computedRequiresReaction: true,
    reactionRequiresObservable: true,
    observableRequiresReaction: true,
  })

  if (!rootElement) {
    throw new Error('No root element provided')
  }

  return Promise.resolve()
}
