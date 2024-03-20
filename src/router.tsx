import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'

const publicRouters: RouteObject[] = [
  {
    element: <h1>login</h1>,
    path: '/sign-in',
  },
  {
    element: <h1>sing-up</h1>,
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
  const { isError, isLoading } = { isError: false, isLoading: false }

  if (isLoading) {
    return <h1>Loading...</h1>
  }
  const isAuthenticated = !isError

  return isAuthenticated ? <Outlet /> : <Navigate to={'/sign-in'} />
}
