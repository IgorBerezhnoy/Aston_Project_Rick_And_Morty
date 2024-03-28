import { RouteObject } from 'react-router-dom'

import { urlPaths } from '@/enums'
import { CharacterPageContainer } from '@/page/character-page/character-page-container'
import { Page404 } from '@/page/page-404/page-404'
import { SearchPageContainer } from '@/page/search-page'
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
    element: <Page404 />,
    path: urlPaths.error,
  },
  {
    element: <SearchPageContainer />,
    path: urlPaths.root,
  },

  {
    element: <CharacterPageContainer />,
    path: urlPaths.chapterId,
  },
  {
    element: <SearchPageContainer />,
    path: urlPaths.search,
  },
]
