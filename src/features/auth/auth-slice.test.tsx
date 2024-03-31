import '@testing-library/jest-dom'

import { AuthState, authSlice, login, logout, setError } from './authSlice'

let startState: AuthState

beforeEach(() => {
  startState = {
    error: null,
    isAuth: false,
    user: null,
  }
})
describe('Work with auth slice ', () => {
  test('should be login', () => {
    const email = '1@1.ru'
    const endState = authSlice.reducer(startState, login({ email, favoriteIds: [] }))

    expect(endState.user).toEqual({ email, favoriteIds: [] })
    expect(endState.isAuth).toBe(true)
  })
  test('should be logOut', () => {
    const endState = authSlice.reducer(startState, logout())

    expect(endState).toEqual({
      error: null,
      isAuth: false,
      user: null,
    })
  })
  test('correct error should be set', () => {
    const error = 'This is big error'
    const endState = authSlice.reducer(startState, setError({ error }))

    expect(endState.error).toBe(error)
  })
  test('correct error should be null', () => {
    const endState = authSlice.reducer(startState, setError({ error: null }))

    expect(endState.error).toBe(null)
  })
})
