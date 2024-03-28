import { RouteObject } from 'react-router-dom'

import { urlPaths } from '@/enums'
import { CharacterPageContainer } from '@/page/character-page/character-page-container'
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
    element: <CharacterPageContainer />,
    path: urlPaths.chapterId,
  },
]
