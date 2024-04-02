import { Character } from '@/service/charactersApi'

export const getPageSize = (count: number, pages: number) => Math.ceil(count / pages)
export const addIsFavoriteForChar = (char: Character) => {
  return { ...char, isFavorite: true }
}
