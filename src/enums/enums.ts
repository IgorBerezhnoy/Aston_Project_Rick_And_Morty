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

1

export enum apiPaths {
  base = 'https://rickandmortyapi.com/api',
  character = '/character/',
  page = '?page=',
}

export enum genders {
  all = 'all',
  female = 'female',
  genderless = 'genderless',
  male = 'male',
  unknown = 'unknown',
}

export enum statuses {
  alive = 'alive',
  all = 'all',
  dead = 'dead',
  unknown = 'unknown',
}

export enum localStorageKeys {
  currentUser = 'currentUser',
}
