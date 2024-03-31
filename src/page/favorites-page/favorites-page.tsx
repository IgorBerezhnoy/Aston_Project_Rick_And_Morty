import { FC, useCallback, useEffect, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

import { CharacterCardWithState } from '@/components/characterCard'
import { CharactersContainer } from '@/components/charactersContainer'
import { urlPaths } from '@/enums'
import { selectAuth } from '@/features/auth/authSlice'
import { useDatabaseUpdate } from '@/hooks/use-database-update'
import { Character, CharactersApi } from '@/service/ResoursesService/CharactersApi'

const baseCount = 20

const FavoritesPage: FC = () => {
  const { user } = useSelector(selectAuth)
  const [chars, setChars] = useState<CharacterCardWithState[]>([])
  const navigate = useNavigate()
  const { page } = useParams()

  const currPage = useMemo(() => {
    if (page === undefined) {
      return 1
    }

    return +page
  }, [page])

  const currFavoriteIds = useMemo(() => {
    if (user === null) {
      return []
    }

    return user.favoriteIds.slice((currPage - 1) * baseCount, currPage * baseCount)
  }, [currPage, user])

  const setAnotherPage = useCallback(
    (nextPage: number) => {
      navigate(`${urlPaths.favorites}${nextPage}`)
    },
    [navigate]
  )

  const addIsFavoriteForChar = useCallback((char: Character) => {
    return { ...char, isFavorite: true }
  }, [])

  const setCharacters = useCallback(async () => {
    if (currFavoriteIds.length === 0) {
      setChars([])

      return
    }
    const resObject = await CharactersApi.getCharactersById(currFavoriteIds)

    if (resObject.data) {
      if (!Array.isArray(resObject.data)) {
        resObject.data = [resObject.data]
      }
      const charsWithState = resObject.data.map(char => addIsFavoriteForChar(char))

      setChars(charsWithState)
    } else {
      //Пробросить ошибку в обработчик
      setChars([])
    }
  }, [currFavoriteIds, addIsFavoriteForChar])

  const pages = user === null ? 0 : Math.ceil(user.favoriteIds.length / baseCount)

  useEffect(() => {
    setCharacters()
  }, [setCharacters])

  useDatabaseUpdate(user)

  return (
    <CharactersContainer
      chars={chars}
      count={currFavoriteIds.length}
      currPage={currPage}
      pages={pages}
      setAnotherPage={setAnotherPage}
    />
  )
}

export default FavoritesPage
