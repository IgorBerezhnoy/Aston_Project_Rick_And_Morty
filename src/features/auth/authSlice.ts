import { RootState } from '@/app/store'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface AuthState {
  email: null | string
  error: null | string
  isAuth: boolean
}

const initialState: AuthState = {
  email: null,
  error: null,
  isAuth: false,
}

export const authSlice = createSlice({
  initialState,
  name: 'auth',
  reducers: {
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
  },
})

export const { login, logout, setError } = authSlice.actions

export const selectAuth = (state: RootState) => state.auth

export default authSlice.reducer
type LoginActionType = { email: string }
type ErrorActionType = { error: null | string }
