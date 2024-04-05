import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'

import { MainHeaderContainer } from '@/components/header/mainHeaderContainer'
import { Page } from '@/components/page'
import { localStorageKeys } from '@/enums'
import { login, selectAuth } from '@/features/auth/authSlice'
import { useAppDispatch } from '@/hooks/use-appDispatch'

export function Layout() {
  const { isAuth, user } = useSelector(selectAuth)

  const dispatch = useAppDispatch()

  useEffect(() => {
    const currentUser = localStorage.getItem(localStorageKeys.currentUser)

    if (!currentUser) {
      return
    }
    const { email, favoriteIds, stories } = JSON.parse(currentUser)

    dispatch(login({ email, favoriteIds, stories }))
  }, [])

  return (
    <>
      <MainHeaderContainer isAuth={isAuth} name={user ? user.email : ''} />
      <Page>
        <Outlet />
      </Page>
    </>
  )
}
