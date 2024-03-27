import { apiPaths } from '@/enums'
import axios, { AxiosError } from 'axios'

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

export interface Result<T> {
  data: T | null
  errorMessage: string
  hasError: boolean
}

export const api = axios.create({
  baseURL: apiPaths.base,
})

export class ServicePrototype {
  static _handlerError<T>(result: Result<T>, err: AxiosError<Error>) {
    result.hasError = true
    if (err.response) {
      result.errorMessage = err.response.data.error
    } else {
      result.errorMessage = err.message
    }
  }
}
