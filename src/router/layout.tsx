import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'

import { MainHeader } from '@/components/header/mainHeader'
import { Page } from '@/components/page'
import { selectApp } from '@/features/app/appSlice'
import { login, selectAuth, setFavoriteIds } from '@/features/auth/authSlice'
import { useAppDispatch } from '@/hooks/use-appDispatch'

export function Layout() {
  const { email, isAuth } = useSelector(selectAuth)
  const { isLoading } = useSelector(selectApp)
  const dispatch = useAppDispatch()

  useEffect(() => {
    const currentUser = localStorage.getItem('currentUser')

    if (!currentUser) {
      return
    } // TODO Пока заглушка
    const currentUserObj = JSON.parse(currentUser)
    const email = currentUserObj?.email
    const favoriteIds = currentUserObj?.favoriteIds

    if (!currentUserObj || !email) {
      return
    } // TODO Пока заглушка
    dispatch(login({ email: email }))
    if (favoriteIds === undefined) {
      return
    }
    dispatch(setFavoriteIds({ favoriteIds: favoriteIds }))
  }, [])

  return (
    <>
      <MainHeader isAuth={isAuth} isLoading={isLoading} name={email ?? ''} />
      <Page>
        <Outlet />
      </Page>
    </>
  )
}
