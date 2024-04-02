import { apiPaths } from '@/enums'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface Info {
  count: number
  next: null | string
  pages: number
  prev: null | string
}

export interface Response<T> {
  info: Info
  results: T
}

export interface Error {
  error: string
}

interface Location {
  name: string
  url: string
}

export interface Character {
  created: string
  episode: string[]
  gender: string
  id: number
  image: string
  location: Location
  name: string
  origin: Location
  species: string
  status: string
  type: string
  url: string
}

export const rickAndMortyApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: apiPaths.base }),
  endpoints: builder => ({
    getCharacterById: builder.query<Character, number>({
      query: id => `${apiPaths.character}${id}`,
    }),
    getCharactersById: builder.query<Character | Character[], number[]>({
      query: id => `${apiPaths.character}${id}`,
    }),
    getCharactersPage: builder.query<Response<Character[]>, string>({
      query: params => `${apiPaths.character}?${params}`,
    }),
  }),
  reducerPath: 'rickAndMortyApi',
})

export const { useGetCharacterByIdQuery, useGetCharactersByIdQuery, useGetCharactersPageQuery } =
  rickAndMortyApi
