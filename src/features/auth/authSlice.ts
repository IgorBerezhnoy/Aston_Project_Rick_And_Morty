import { RootState } from '@/app/store'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface CounterState {
  email: null | string
  error: null | string
  isAuth: boolean
}

const initialState: CounterState = {
  email: null,
  error: null,
  isAuth: false,
}

export const counterSlice = createSlice({
  initialState,
  name: 'auth',
  reducers: {
    login: (state, action: PayloadAction<{ email: string }>) => {
      state.email = action.payload.email
      state.isAuth = true
    },
    logout: state => {
      state.email = null
      state.isAuth = false
    },
    setError: (state, action: PayloadAction<{ error: string }>) => {
      state.error = action.payload.error
    },
  },
})

export const { login, logout, setError } = counterSlice.actions

export const selectAuth = (state: RootState) => state.auth

export default counterSlice.reducer
