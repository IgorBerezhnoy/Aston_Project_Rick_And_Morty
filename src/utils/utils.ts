import { Character } from '@/service/ResoursesService/CharactersApi'

export const getPageSize = (count: number, pages: number) => Math.ceil(count / pages)
export const addIsFavoriteForChar = (char: Character) => {
  return { ...char, isFavorite: true }
}
