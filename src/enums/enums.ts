export enum urlPaths {
  chapterId = '/character/:id',
  character = '/character/',
  error = '*',
  favorites = '/favorites/',
  favoritesRoute = '/favorites/:page',
  history = '/history',
  root = '/',
  search = '/search/',
  signIn = '/sign-in',
  signUp = '/sign-up',
}

export enum apiPaths {
  base = 'https://rickandmortyapi.com/api',
  character = '/character/',
  page = '?page=',
}
