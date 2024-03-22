import type { TypedUseSelectorHook } from 'react-redux'

import { useDispatch, useSelector } from 'react-redux'

import { AppDispatch, RootState } from '@/app/store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector