/* eslint-disable perfectionist/sort-interfaces */
import axios, { AxiosError } from 'axios'

export interface IInfo {
  count: number
  pages: number
  next: null | string
  prev: null | string
}

export interface IResponse<T> {
  info: IInfo
  results: T
}

export interface IError {
  error: string
}

export interface IResult<T> {
  errorMessage: string
  hasError: boolean
  data: T | null
}

export const api = axios.create({
  baseURL: 'https://rickandmortyapi.com/api',
})

export class ServicePrototype {
  static _handlerError<T>(result: IResult<T>, err: AxiosError<IError>) {
    result.hasError = true
    if (err.response) {
      result.errorMessage = err.response.data.error
    } else {
      result.errorMessage = err.message
    }
  }
}
