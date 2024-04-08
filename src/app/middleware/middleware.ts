import { toast } from 'react-toastify'

export const errorHandlingMiddleware =
  () => (next: (action: unknown) => unknown) => (action: unknown) => {
    try {
      return next(action)
    } catch (error) {
      toast('Error caught in middleware:')

      return next({ payload: error, type: 'ERROR_OCCURRED' })
    }
  }
