import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'

import { login, selectAuth } from '@/features/auth/authSlice'
import { useAppDispatch } from '@/hooks/useAppDispatch'
import { SignInPage } from '@/page/sign-in-page'
import { SignUpPage } from '@/page/sign-up-page'

const publicRouters: RouteObject[] = [
  {
    element: <SignInPage />,
    path: '/sign-in',
  },
  {
    element: <SignUpPage />,
    path: '/sign-up',
  },
  {
    element: <h1>404</h1>,
    path: '*',
  },
]
const privateRoutes: RouteObject[] = [
  {
    element: <h1>Main</h1>,
    path: '/',
  },

  {
    element: <h1>Character</h1>,
    path: '/character/:id',
  },
  {
    element: <h1>Search</h1>,
    path: '/search/:query',
  },
  {
    element: <h1>history</h1>,
    path: '/history ',
  },
  {
    element: <h1>favorites</h1>,
    path: '/favorites ',
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
  // const { data, isError, isLoading } = useGetMeQuerySate()
  //
  // const user = isError ? undefined : data

  return (
    <>
      <div>
        {/*TODO в будущем компоннта пайдж*/}
        <header>header</header>
        <Outlet />
      </div>
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

  return isAuth ? <Outlet /> : <Navigate to={'/sign-in'} />
}
