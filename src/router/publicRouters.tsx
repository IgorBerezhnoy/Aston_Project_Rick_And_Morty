import { RouteObject } from 'react-router-dom'

import HistoryContainer from '@/components/history/historyContainer'
import { urlPaths } from '@/enums'
import { CharacterPageContainer } from '@/page/character-page/character-page-container'
import { SearchPageContainer } from '@/page/search-page'
import { SignInPageContainer } from '@/page/sign-in-page'
import { SignUpPageContainer } from '@/page/sign-up-page'

export const publicRouters: RouteObject[] = [
  {
    element: <SignInPageContainer />,
    path: urlPaths.signIn,
  },
  {
    element: <HistoryContainer />,
    path: urlPaths.history,
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
