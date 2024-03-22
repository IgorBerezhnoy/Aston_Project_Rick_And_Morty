import { AxiosError } from 'axios'

import { IError, IResponse, IResult, ServicePrototype, api } from '../ServicePrototype'

interface ILocation {
  name: string
  url: string
}

export interface ICharacter {
  created: string
  episode: string[]
  gender: string
  id: number
  image: string
  location: ILocation
  name: string
  origin: ILocation
  species: string
  status: string
  type: string
  url: string
}

export class CharactersApi extends ServicePrototype {
  static async getCharacterById(id: number) {
    const result: IResult<ICharacter> = {
      data: null,
      errorMessage: '',
      hasError: false,
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
      data: null,
      errorMessage: '',
      hasError: false,
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
      data: null,
      errorMessage: '',
      hasError: false,
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
