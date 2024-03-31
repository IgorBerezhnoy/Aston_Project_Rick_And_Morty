import { RootState } from '@/app/store'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'


export type User = {
  email: string
  favoriteIds: number[]
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

export const { addFavoriteById, deleteFavoriteById, login, logout, setError } = authSlice.actions

export const selectAuth = (state: RootState) => state.auth


type LoginActionType = { email: string; favoriteIds: number[] }
type ErrorActionType = { error: string }
type FavotiteActionType = { favoriteId: number }
