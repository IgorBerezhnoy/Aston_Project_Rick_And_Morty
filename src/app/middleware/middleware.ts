export const logger =
  (store: Store) => (next: (action: unknown) => unknown) => (action: unknown) => {
    console.log('dispatching', action)
    const result = next(action)

    console.log('next state', store.getState())

    return result
  }
type Store = {
  getState: () => any
}
