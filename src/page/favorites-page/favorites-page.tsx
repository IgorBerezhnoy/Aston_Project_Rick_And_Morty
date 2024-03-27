import { FC, useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { CharactersList } from '@/components/charactersList'
import { urlPaths } from '@/enums'
import { Character, CharactersApi } from '@/service/ResoursesService/CharactersApi'

export const FavoritesPage: FC = () => {
  const [chars, setChars] = useState<Character[]>([])
  const navigate = useNavigate()

  const getFavoriteIds = useCallback(() => {
    const userJson = localStorage.getItem('currentUser')

    if (userJson === null) {
      return null
    }

    const userData = JSON.parse(userJson)

    if (userData.favorite === undefined) {
      return []
    }

    return userData.favorite
  }, [])

  const setCharacters = useCallback(async () => {
    const favoriteIds = getFavoriteIds()

    if (favoriteIds === null) {
      //Пробросить ошибку в обработчик
      navigate(urlPaths.signIn)
    }

    if (favoriteIds.length === 0) {
      setChars([])

      return
    }

    const resObject = await CharactersApi.getCharactersById(favoriteIds)

    if (resObject.data) {
      setChars(resObject.data.results)
    } else {
      //Пробросить ошибку в обработчик
      setChars([])
    }
  }, [getFavoriteIds, navigate])

  useEffect(() => {
    setCharacters()
  }, [setCharacters])

  return <CharactersList chars={chars} />
}
