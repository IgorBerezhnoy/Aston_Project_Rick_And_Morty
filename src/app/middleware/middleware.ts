import { captureException } from 'raven'

export const crashReporter =
  (store: Store) => (next: (action: unknown) => unknown) => (action: unknown) => {
    try {
      return next(action)
    } catch (err: unknown) {
      const error = err as Error

      console.error('Caught an exception!', err)
      captureException(error, {
        extra: {
          action,
          state: store.getState(),
        },
      })
      throw error
    }
  }
type Store = {
  getState: () => any
}
