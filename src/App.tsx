import { useEffect } from 'react'

import { login } from '@/features/auth/authSlice'
import { useAppDispatch } from '@/hooks/useAppDispatch'
import { AppRouter } from '@/router'

export function App() {
  const dispatch = useAppDispatch()

  // const { isAuth } = useSelector(selectAuth)
  useEffect(() => {
    const currentUser = localStorage.getItem('currentUser')

    if (!currentUser) {
      return
    } // TODO Пока заглушка
    const currentUserObj = JSON.parse(currentUser)
    const email = currentUserObj?.email

    if (!currentUserObj || !email) {
      return
    } // TODO Пока заглушка
    dispatch(login({ email: email }))
  }, [])

  return (
    <div>
      <AppRouter />
    </div>
  )
}
