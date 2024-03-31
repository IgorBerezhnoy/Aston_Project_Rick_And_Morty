import { logger } from '@/app/middleware/middleware'
import { appSlice } from '@/features/app/appSlice'
import { authSlice } from '@/features/auth/authSlice'
import { applyMiddleware, combineReducers, createStore } from '@reduxjs/toolkit'

const rootReducer = combineReducers({
  app: appSlice.reducer,
  auth: authSlice.reducer,
})

export const store = createStore(rootReducer, applyMiddleware(logger))
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
