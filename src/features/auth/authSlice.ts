import { RootState } from '@/app/store'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type History = {
  name: string
  path: string
}

export type User = {
  email: string
  favoriteIds: number[]
  stories: History[]
}

type AuthState = {
  error: null | string
  isAuth: boolean
  user: User | null
}

const initialState: AuthState = {
  error: null,
  isAuth: false,
  user: null,
}

export const authSlice = createSlice({
  initialState,
  name: 'auth',
  reducers: {
    addFavoriteById: (state, action: PayloadAction<FavotiteActionType>) => {
      if (state.user === null) {
        return
      }
      state.user.favoriteIds.push(action.payload.favoriteId)
    },
    addHistory: (state, action: PayloadAction<HistoryActionType>) => {
      if (state.user === null) {
        return
      }
      state.user.stories.push({ ...action.payload })
    },
    deleteFavoriteById: (state, action: PayloadAction<FavotiteActionType>) => {
      if (state.user === null) {
        return
      }
      state.user.favoriteIds = state.user.favoriteIds.filter(el => el !== action.payload.favoriteId)
    },
    login: (state, action: PayloadAction<LoginActionType>) => {
      state.user = {
        ...action.payload,
      }
      state.isAuth = true
    },
    logout: state => {
      state.user = null
      state.isAuth = false
    },
    setError: (state, action: PayloadAction<ErrorActionType>) => {
      state.error = action.payload.error
    },
  },
})

export const { addFavoriteById, addHistory, deleteFavoriteById, login, logout, setError } =
  authSlice.actions

export const selectAuth = (state: RootState) => state.auth

export default authSlice.reducer
type LoginActionType = User
type ErrorActionType = { error: string }
type FavotiteActionType = { favoriteId: number }
type HistoryActionType = History
