import '@testing-library/jest-dom'

import { AppState, appSlice, setError, setInitialized, setLoading } from './appSlice'

let startState: AppState

beforeEach(() => {
  startState = {
    error: null,
    initialized: false,
    isLoading: false,
  }
})
test('correct error should be set', () => {
  const error = 'This is big error'
  const endState = appSlice.reducer(startState, setError({ error }))

  expect(endState.error).toBe(error)
})
test('correct error should be null', () => {
  const endState = appSlice.reducer(startState, setError({ error: null }))

  expect(endState.error).toBe(null)
})
test('should be set loading', () => {
  const status = true
  const endState = appSlice.reducer(startState, setLoading({ status }))

  expect(endState.isLoading).toBe(status)
})
test('state should be initialized', () => {
  const status = true
  const endState = appSlice.reducer(startState, setInitialized({ status }))

  expect(endState.initialized).toBe(status)
})
