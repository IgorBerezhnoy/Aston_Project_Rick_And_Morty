import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'

import { MainHeader } from '@/components/header/mainHeader'
import { Page } from '@/components/page'
import { localStorageKeys } from '@/enums'
import { selectApp } from '@/features/app/appSlice'
import { login, selectAuth } from '@/features/auth/authSlice'
import { useAppDispatch } from '@/hooks/use-appDispatch'

export function Layout() {
  const { isAuth, user } = useSelector(selectAuth)
  const { isLoading } = useSelector(selectApp)
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
      <MainHeader isAuth={isAuth} isLoading={isLoading} name={user ? user.email : ''} />
      <Page>
        <Outlet />
      </Page>
    </>
  )
}
