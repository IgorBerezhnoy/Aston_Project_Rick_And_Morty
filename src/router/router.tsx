import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { Layout } from '@/router/layout'
import { PrivateAppRoutes, privateRoutes } from '@/router/privateRoutes'
import { publicRouters } from '@/router/publicRouters'

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
