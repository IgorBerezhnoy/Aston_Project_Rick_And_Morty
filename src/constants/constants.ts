export const genders = ['female', 'male', 'genderless', 'unknown', 'all']
export const statuses = ['alive', 'dead', 'unknown', 'all']
export const GENDER = 'gender'
export const STATUS = 'status'

export const baseInfo = {
  count: 0,
  next: null,
  pages: 0,
  prev: null,
}

export const testChars = [
  {
    created: '2017-11-04T18:48:46.250Z',
    episode: [
      'https://rickandmortyapi.com/api/episode/1',
      'https://rickandmortyapi.com/api/episode/2',
    ],
    gender: 'Male',
    id: 1,
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    location: {
      name: 'Earth',
      url: 'https://rickandmortyapi.com/api/location/20',
    },
    name: 'Rick Sanchez',
    origin: {
      name: 'Earth',
      url: 'https://rickandmortyapi.com/api/location/1',
    },
    species: 'Human',
    status: 'Alive',
    type: '',
    url: 'https://rickandmortyapi.com/api/character/1',
  },
  {
    created: '2017-11-04T18:50:21.651Z',
    episode: [
      'https://rickandmortyapi.com/api/episode/1',
      'https://rickandmortyapi.com/api/episode/2',
      // ...
    ],
    gender: 'Male',
    id: 2,
    image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
    location: {
      name: 'Earth',
      url: 'https://rickandmortyapi.com/api/location/20',
    },
    name: 'Morty Smith',
    origin: {
      name: 'Earth',
      url: 'https://rickandmortyapi.com/api/location/1',
    },
    species: 'Human',
    status: 'Alive',
    type: '',
    url: 'https://rickandmortyapi.com/api/character/2',
  },
  {
    created: '2017-12-29T18:51:29.693Z',
    episode: ['https://rickandmortyapi.com/api/episode/8'],
    gender: 'Male',
    id: 183,
    image: 'https://rickandmortyapi.com/api/character/avatar/183.jpeg',
    location: {
      name: 'Earth (C-500A)',
      url: 'https://rickandmortyapi.com/api/location/23',
    },
    name: 'Johnny Depp',
    origin: {
      name: 'Earth (C-500A)',
      url: 'https://rickandmortyapi.com/api/location/23',
    },
    species: 'Human',
    status: 'Alive',
    type: '',
    url: 'https://rickandmortyapi.com/api/character/183',
  },
  {
    created: '2018-01-10T18:20:41.703Z',
    episode: ['https://rickandmortyapi.com/api/episode/27'],
    gender: 'Male',
    id: 361,
    image: 'https://rickandmortyapi.com/api/character/avatar/361.jpeg',
    location: {
      name: 'Earth',
      url: 'https://rickandmortyapi.com/api/location/20',
    },
    name: 'Toxic Rick',
    origin: {
      name: 'Alien Spa',
      url: 'https://rickandmortyapi.com/api/location/64',
    },
    species: 'Humanoid',
    status: 'Dead',
    type: "Rick's Toxic Side",
    url: 'https://rickandmortyapi.com/api/character/361',
  },
]
