import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'

import { MainHeader } from '@/components/header/mainHeader'
import { Page } from '@/components/page'
import { login, selectAuth } from '@/features/auth/authSlice'
import { useAppDispatch } from '@/hooks/use-appDispatch'
import { SignInPageContainer } from '@/page/sign-in-page'
import { SignUpPageContainer } from '@/page/sign-up-page'

import { SearchPage } from './page/search-page'

export const urlPath = Object.freeze({
  chapterId: '/character/:id',
  error: '*',
  favorites: '/favorites',
  history: '/history',
  root: '/',
  search: '/search/:query',
  signIn: '/sign-in',
  signUp: '/sign-up',
})

const publicRouters: RouteObject[] = [
  {
    element: <SignInPageContainer />,
    path: urlPath.signIn,
  },
  {
    element: <SignUpPageContainer />,
    path: urlPath.signUp,
  },
  {
    element: <h1>404</h1>,
    path: urlPath.error,
  },
]
const privateRoutes: RouteObject[] = [
  {
    element: <h1>Main</h1>,
    path: urlPath.root,
  },

  {
    element: <h1>Character</h1>,
    path: urlPath.chapterId,
  },
  {
    element: <SearchPage />,
    path: urlPath.search,
  },
  {
    element: <h1>history</h1>,
    path: urlPath.history,
  },
  {
    element: <h1>favorites</h1>,
    path: urlPath.favorites,
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

  return (
    <>
      <MainHeader isAuth={isAuth} name={email ?? ''} />
      <Page>
        <Outlet />
      </Page>
    </>
  )
}

function PrivateAppRoutes() {
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
  const { isAuth } = useSelector(selectAuth)

  return isAuth ? <Outlet /> : <Navigate to={urlPath.signIn} />
}
