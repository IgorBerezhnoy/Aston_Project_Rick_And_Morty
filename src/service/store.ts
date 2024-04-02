import { configureStore } from '@reduxjs/toolkit'

import { rickAndMortyApi } from './charactersApi'

export const storeRTKQuery = configureStore({
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(rickAndMortyApi.middleware),
  reducer: {
    [rickAndMortyApi.reducerPath]: rickAndMortyApi.reducer,
  },
})
