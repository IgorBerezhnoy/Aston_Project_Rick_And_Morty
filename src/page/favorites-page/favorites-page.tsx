import { FC, useCallback, useEffect, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

import { CharacterCardWithState } from '@/components/characterCard'
import { CharactersContainer } from '@/components/charactersContainer'
import { urlPaths } from '@/enums'
import { selectAuth, setResourceUpdate } from '@/features/auth/authSlice'
import { useAppDispatch } from '@/hooks/use-appDispatch'
import { useDatabaseUpdate } from '@/hooks/use-database-update'
import { CharactersApi } from '@/service/ResoursesService/CharactersApi'

const baseCount = 20

export const FavoritesPage: FC = () => {
  const dispatch = useAppDispatch()
  const { favoriteIds } = useSelector(selectAuth)
  const [chars, setChars] = useState<CharacterCardWithState[]>([])
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
      if (!Array.isArray(resObject.data)) {
        resObject.data = [resObject.data]
      }
      const charsWithState = resObject.data.map(char => {
        return { ...char, isFavorite: true }
      })

      setChars(charsWithState)
    } else {
      //Пробросить ошибку в обработчик
      setChars([])
    }
  }, [currFavoriteIds])

  const pages = Math.ceil(favoriteIds.length / baseCount)

  useEffect(() => {
    setCharacters()
  }, [setCharacters])

  useEffect(() => {
    dispatch(setResourceUpdate({ isUpdate: false }))
  }, [chars, dispatch])

  useDatabaseUpdate(favoriteIds)

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
