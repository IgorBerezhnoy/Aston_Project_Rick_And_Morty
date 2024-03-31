import '@testing-library/jest-dom'

import { AuthState, authSlice, login, logout, setError } from './authSlice'

let startState: AuthState

beforeEach(() => {
  startState = {
    email: null,
    error: null,
    isAuth: false,
  }
})
describe('Work with auth slice ', () => {
  test('should be login', () => {
    const email = '1@1.ru'
    const endState = authSlice.reducer(startState, login({ email }))

    expect(endState.email).toBe(email)
    expect(endState.isAuth).toBe(true)
  })
  test('should be logOut', () => {
    const endState = authSlice.reducer(startState, logout())

    expect(endState.email).toBe(null)
    expect(endState.isAuth).toBe(false)
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
