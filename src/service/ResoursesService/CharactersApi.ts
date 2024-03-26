import { apiPaths } from '@/enums'
import { AxiosError } from 'axios'

import { Error, Response, Result, ServicePrototype, api } from '../ServicePrototype'

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

export class CharactersApi extends ServicePrototype {
  static async getCharacterById(id: number) {
    const result: Result<Character> = {
      data: null,
      errorMessage: '',
      hasError: false,
    }

    try {
      const response = await api.get<Character>(`${apiPaths.character}${id}`)
      const character = response.data

      result.data = character
    } catch (error) {
      const err = error as AxiosError<Error>

      this._handlerError(result, err)
    }

    return result
  }

  static async getCharacterPage(params: string) {
    const result: Result<Response<Character[]>> = {
      data: null,
      errorMessage: '',
      hasError: false,
    }

    try {
      const response = await api.get<Response<Character[]>>(`${apiPaths.character}?${params}`)
      const characters = response.data

      result.data = characters
    } catch (error) {
      const err = error as AxiosError<Error>

      this._handlerError(result, err)
    }

    return result
  }

  static async getCharactersById(id: number[]) {
    const result: Result<Response<Character[]>> = {
      data: null,
      errorMessage: '',
      hasError: false,
    }

    try {
      const response = await api.get<Response<Character[]>>(`${apiPaths.character}${id}`)
      const character = response.data

      result.data = character
    } catch (error) {
      const err = error as AxiosError<Error>

      this._handlerError(result, err)
    }

    return result
  }
}
