import { Suspense, lazy } from 'react'
import { RouteObject } from 'react-router-dom'

import { Loader } from '@/components/loader'
import { urlPaths } from '@/enums'

const SignInPageContainer = lazy(() => import('@/page/sign-in-page/sign-in-page-container'))
const SignUpPageContainer = lazy(() => import('@/page/sign-up-page/sign-up-page-container'))
const Page404 = lazy(() => import('@/page/page-404/page-404'))
const CharacterPageContainer = lazy(() => import('@/page/character-page/character-page-container'))
const SearchPageContainer = lazy(() => import('@/page/search-page/search-page-container'))

export const publicRouters: RouteObject[] = [
  {
    element: (
      <Suspense fallback={<Loader />}>
        <SignInPageContainer />
      </Suspense>
    ),
    path: urlPaths.signIn,
  },
  {
    element: (
      <Suspense fallback={<Loader />}>
        <SignUpPageContainer />
      </Suspense>
    ),
    path: urlPaths.signUp,
  },
  {
    element: (
      <Suspense fallback={<Loader />}>
        <Page404 />
      </Suspense>
    ),
    path: urlPaths.error,
  },
  {
    element: (
      <Suspense fallback={<Loader />}>
        <SearchPageContainer />
      </Suspense>
    ),
    path: urlPaths.root,
  },
  {
    element: <SearchPageContainer />,
    path: urlPaths.search,
  },

  {
    element: (
      <Suspense fallback={<Loader />}>
        <CharacterPageContainer />
      </Suspense>
    ),
    path: urlPaths.chapterId,
  },
  {
    element: (
      <Suspense fallback={<Loader />}>
        <SearchPageContainer />
      </Suspense>
    ),
    path: urlPaths.search,
  },
]
