import '@testing-library/jest-dom'

import {
  AuthState,
  addFavoriteById,
  addHistory,
  authSlice,
  deleteFavoriteById,
  login,
  logout,
  setError,
} from './authSlice'

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
    const endState = authSlice.reducer(startState, login({ email, favoriteIds: [], stories: [] }))

    expect(endState.user).toEqual({ email, favoriteIds: [], stories: [] })
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
  test('should be added favorite', () => {
    startState = authSlice.reducer(
      startState,
      login({ email: '1@1.ru', favoriteIds: [], stories: [] })
    )
    const endState = authSlice.reducer(startState, addFavoriteById({ favoriteId: 1 }))

    expect(endState.user?.favoriteIds[0]).toBe(1)
  })
  test('should be added history', () => {
    startState = authSlice.reducer(
      startState,
      login({ email: '1@1.ru', favoriteIds: [], stories: [] })
    )
    const name = '1'
    const path = 'https://1'
    const endState = authSlice.reducer(startState, addHistory({ name, path }))

    expect(endState.user?.stories[0].path).toBe(path)
    expect(endState.user?.stories[0].name).toBe(name)
  })
  test('should be deleted favorite', () => {
    startState = {
      error: null,
      isAuth: false,
      user: {
        email: '1@1.ru',
        favoriteIds: [1, 2, 3],
        stories: [],
      },
    }

    const endState = authSlice.reducer(startState, deleteFavoriteById({ favoriteId: 1 }))

    expect(endState.user?.favoriteIds).toEqual([2, 3])
  })
})
