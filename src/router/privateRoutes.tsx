import { useSelector } from 'react-redux'
import { Outlet, RouteObject } from 'react-router-dom'

import { CardPage } from '@/components/cardPage'
import { urlPaths } from '@/enums'
import { selectAuth } from '@/features/auth/authSlice'

export const privateRoutes: RouteObject[] = [
  {
    element: <h1>history</h1>,
    path: urlPaths.history,
  },
  {
    element: <h1>favorites</h1>,
    path: urlPaths.favorites,
  },
]

export function PrivateAppRoutes() {
  const { isAuth } = useSelector(selectAuth)

  return isAuth ? (
    <Outlet />
  ) : (
    <CardPage title={'This section is available only to registered users'} />
  ) // TODO Пока заглушка
}
