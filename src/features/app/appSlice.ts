import { RootState } from '@/app/store/store'
import {
  AnyAction,
  PayloadAction,
  createSlice,
  isFulfilled,
  isPending,
  isRejected,
} from '@reduxjs/toolkit'

export interface AppState {
  error: null | string
  initialized: boolean
  isLoading: boolean
}

const initialState: AppState = {
  error: null,
  initialized: false,
  isLoading: false,
}

export const appSlice = createSlice({
  extraReducers: builder => {
    builder
      .addMatcher(isPending, state => {
        state.isLoading = true
      })
      .addMatcher(isRejected, (state, action: AnyAction) => {
        state.isLoading = false
        state.error = action.error.message
      })
      .addMatcher(isFulfilled, state => {
        state.isLoading = false
      })
  },
  initialState,
  name: 'app',
  reducers: {
    setError: (state, action: PayloadAction<ErrorActionType>) => {
      state.error = action.payload.error
    },
    setInitialized: (state, action: PayloadAction<InitializedActionType>) => {
      state.initialized = action.payload.status
    },
    setLoading: (state, action: PayloadAction<IsLoadingActionType>) => {
      state.isLoading = action.payload.status
    },
  },
})

export const { setError, setInitialized, setLoading } = appSlice.actions

export const selectApp = (state: RootState) => state.app

export default appSlice.reducer
type ErrorActionType = { error: null | string }
type InitializedActionType = { status: boolean }
type IsLoadingActionType = { status: boolean }
