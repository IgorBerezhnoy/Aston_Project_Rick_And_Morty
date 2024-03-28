import { RootState } from '@/app/store'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface AuthState {
  email: null | string
  error: null | string
  favoriteIds: number[]
  isAuth: boolean
  isUpdate: boolean
}

const initialState: AuthState = {
  email: null,
  error: null,
  favoriteIds: [],
  isAuth: false,
  isUpdate: true,
}

export const authSlice = createSlice({
  initialState,
  name: 'auth',
  reducers: {
    addFavoriteById: (state, action: PayloadAction<FavotiteActionType>) => {
      state.favoriteIds.push(action.payload.favoriteId)
    },
    deleteFavoriteById: (state, action: PayloadAction<FavotiteActionType>) => {
      state.favoriteIds = state.favoriteIds.filter(el => el !== action.payload.favoriteId)
    },
    login: (state, action: PayloadAction<LoginActionType>) => {
      state.email = action.payload.email
      state.isAuth = true
    },
    logout: state => {
      state.email = null
      state.isAuth = false
    },
    setError: (state, action: PayloadAction<ErrorActionType>) => {
      state.error = action.payload.error
    },
    setFavoriteIds: (state, action: PayloadAction<FavotitesActionType>) => {
      state.favoriteIds = action.payload.favoriteIds
    },
    setResourceUpdate: (state, action: PayloadAction<UpdateActionType>) => {
      state.isUpdate = action.payload.isUpdate
    },
  },
})

export const {
  addFavoriteById,
  deleteFavoriteById,
  login,
  logout,
  setError,
  setFavoriteIds,
  setResourceUpdate,
} = authSlice.actions

export const selectAuth = (state: RootState) => state.auth

export default authSlice.reducer
type LoginActionType = { email: string }
type ErrorActionType = { error: string }
type FavotitesActionType = { favoriteIds: number[] }
type FavotiteActionType = { favoriteId: number }
type UpdateActionType = { isUpdate: boolean }
