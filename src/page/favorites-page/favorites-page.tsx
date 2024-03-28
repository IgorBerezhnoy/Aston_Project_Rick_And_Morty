import { FC, useCallback, useEffect, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

import { CharactersContainer } from '@/components/charactersContainer'
import { urlPaths } from '@/enums'
import { selectAuth } from '@/features/auth/authSlice'
import { Character, CharactersApi } from '@/service/ResoursesService/CharactersApi'

const baseCount = 20

export const FavoritesPage: FC = () => {
  const { favoriteIds } = useSelector(selectAuth)
  const [chars, setChars] = useState<Character[]>([])
  const navigate = useNavigate()
  const { page } = useParams()

  const currPage = useMemo(() => {
    if (page === undefined) {
      return 1
    }

    return +page
  }, [page])

  const currFavoriteIds = useMemo(
    () => favoriteIds.slice((currPage - 1) * baseCount, currPage * baseCount),
    [currPage, favoriteIds]
  )

  const setAnotherPage = useCallback(
    (nextPage: number) => {
      navigate(`${urlPaths.favorites}${nextPage}`)
    },
    [navigate]
  )

  const setCharacters = useCallback(async () => {
    if (currFavoriteIds.length === 0) {
      setChars([])

      return
    }

    const resObject = await CharactersApi.getCharactersById(currFavoriteIds)

    if (resObject.data) {
      setChars(resObject.data.results)
    } else {
      //Пробросить ошибку в обработчик
      setChars([])
    }
  }, [currFavoriteIds])

  const pages = Math.ceil(favoriteIds.length / baseCount)

  useEffect(() => {
    setCharacters()
  }, [setCharacters])

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
