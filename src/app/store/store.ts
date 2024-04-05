import { errorHandlingMiddleware } from '@/app/middleware/middleware'
import { appSlice } from '@/features/app/appSlice'
import { authSlice } from '@/features/auth/authSlice'
import { rickAndMortyApi } from '@/service/charactersApi'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(errorHandlingMiddleware, rickAndMortyApi.middleware),
  reducer: {
    app: appSlice.reducer,
    auth: authSlice.reducer,
    [rickAndMortyApi.reducerPath]: rickAndMortyApi.reducer,
  },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
