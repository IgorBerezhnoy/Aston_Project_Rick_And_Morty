import { useSelector } from 'react-redux'
import { Outlet, RouteObject } from 'react-router-dom'

import { urlPaths } from '@/enums'
import { selectAuth } from '@/features/auth/authSlice'
import { FavoritesPage } from '@/page/favorites-page/favorites-page'
import { SearchPageContainer } from '@/page/search-page'

export const privateRoutes: RouteObject[] = [
  {
    element: <h1>history</h1>,
    path: urlPaths.history,
  },
  {
    element: <FavoritesPage />,
    path: urlPaths.favoritesRoute,
  },
  {
    element: <SearchPageContainer />,
    path: urlPaths.search,
  },
]

export function PrivateAppRoutes() {
  const { isAuth } = useSelector(selectAuth)

  return isAuth ? (
    <Outlet />
  ) : (
    <h1>Данный раздел доступен только зарегистрированным пользователям </h1>
  ) // TODO Пока заглушка
}
