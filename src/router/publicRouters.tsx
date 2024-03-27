import { RouteObject } from 'react-router-dom'

import { urlPaths } from '@/enum'
import { SearchPage } from '@/page/search-page'
import { SignInPageContainer } from '@/page/sign-in-page'
import { SignUpPageContainer } from '@/page/sign-up-page'

export const publicRouters: RouteObject[] = [
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
