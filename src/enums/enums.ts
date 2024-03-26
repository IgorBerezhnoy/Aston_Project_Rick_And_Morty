export enum urlPaths {
  chapterId = '/character/:id',
  error = '*',
  favorites = '/favorites',
  history = '/history',
  root = '/',
  search = '/search/:query',
  signIn = '/sign-in',
  signUp = '/sign-up',
}

export enum apiPaths {
  base = 'https://rickandmortyapi.com/api',
  character = '/character/',
  page = '?page=',
}
