/* eslint-disable perfectionist/sort-named-imports */
/* eslint-disable perfectionist/sort-objects */
/* eslint-disable perfectionist/sort-interfaces */
import { AxiosError } from 'axios'

import { IResponse, IError, IResult, ServicePrototype, api } from '../ServicePrototype'

interface ILocation {
  name: string
  url: string
}

export interface ICharacter {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: ILocation
  location: ILocation
  image: string
  episode: string[]
  url: string
  created: string
}

export class CharactersApi extends ServicePrototype {
  static async getCharacterById(id: number) {
    const result: IResult<ICharacter> = {
      errorMessage: '',
      hasError: false,
      data: null,
    }

    try {
      const response = await api.get<ICharacter>(`/character/${id}`)
      const character = response.data

      result.data = character
    } catch (error) {
      const err = error as AxiosError<IError>

      this._handlerError(result, err)
    }

    return result
  }

  static async getCharacterPage(page: number) {
    const result: IResult<ICharacter[]> = {
      errorMessage: '',
      hasError: false,
      data: null,
    }

    try {
      const response = await api.get<IResponse<ICharacter[]>>(`/character/?page=${page}`)
      const characters = response.data.results

      result.data = characters
    } catch (error) {
      const err = error as AxiosError<IError>

      this._handlerError(result, err)
    }

    return result
  }

  static async getCharactersById(id: number[]) {
    const result: IResult<ICharacter[]> = {
      errorMessage: '',
      hasError: false,
      data: null,
    }

    try {
      const response = await api.get<ICharacter[]>(`/character/${id}`)
      const character = response.data

      result.data = character
    } catch (error) {
      const err = error as AxiosError<IError>

      this._handlerError(result, err)
    }

    return result
  }
}
