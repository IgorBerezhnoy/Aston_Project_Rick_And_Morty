import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Outlet, RouteObject, RouterProvider, createBrowserRouter } from 'react-router-dom'

import { MainHeader } from '@/components/header/mainHeader'
import { Page } from '@/components/page'
import { urlPaths } from '@/enum/urlPaths'
import { selectApp } from '@/features/app/appSlice'
import { login, selectAuth } from '@/features/auth/authSlice'
import { useAppDispatch } from '@/hooks/use-appDispatch'
import { SignInPageContainer } from '@/page/sign-in-page'
import { SignUpPageContainer } from '@/page/sign-up-page'

import { SearchPage } from './page/search-page'

const publicRouters: RouteObject[] = [
  {
    element: <SignInPageContainer />,
    path: urlPaths.signIn,
  },
  {
    element: <SignUpPageContainer />,
    path: urlPaths.signUp,
  },
  {
    element: <h1>404</h1>,
    path: urlPaths.error,
  },
  {
    element: <h1>Main</h1>,
    path: urlPaths.root,
  },

  {
    element: <h1>Character</h1>,
    path: urlPaths.chapterId,
  },
  {
    element: <SearchPage />,
    path: urlPaths.search,
  },
]
const privateRoutes: RouteObject[] = [
  {
    element: <h1>history</h1>,
    path: urlPaths.history,
  },
  {
    element: <h1>favorites</h1>,
    path: urlPaths.favorites,
  },
]

const router = createBrowserRouter([
  {
    children: [
      ...publicRouters,
      {
        children: privateRoutes,
        element: <PrivateAppRoutes />,
      },
    ],
    element: <Layout />,
  },
])

export const AppRouter = () => {
  return <RouterProvider router={router} />
}

function Layout() {
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

    if (!currentUserObj || !email) {
      return
    } // TODO Пока заглушка
    dispatch(login({ email: email }))
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

function PrivateAppRoutes() {
  const { isAuth } = useSelector(selectAuth)

  return isAuth ? (
    <Outlet />
  ) : (
    <h1>Данный раздел доступен только зарегистрированным пользователям </h1>
  ) // TODO Пока заглушка
}
