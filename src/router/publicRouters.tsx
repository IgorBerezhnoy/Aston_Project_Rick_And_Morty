import { RouteObject } from 'react-router-dom'

import { urlPaths } from '@/enums'
import CharacterPageContainer from '@/page/character-page/character-page-container'
import Page404 from '@/page/page-404/page-404'
import SearchPageContainer from '@/page/search-page/search-page-container'
import SignInPageContainer from '@/page/sign-in-page/sign-in-page-container'
import SignUpPageContainer from '@/page/sign-up-page/sign-up-page-container'

// const SignInPageContainer = lazy(() => import('@/page/sign-in-page/sign-in-page-container'))
// const SignUpPageContainer = lazy(() => import('@/page/sign-up-page/sign-up-page-container'))
// const Page404 = lazy(() => import('@/page/page-404/page-404'))
// const CharacterPageContainer = lazy(() => import('@/page/character-page/character-page-container'))
//Todo доработать
// когда идёт переход возникает ошибка
// установить лоадер
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
