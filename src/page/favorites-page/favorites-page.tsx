import { FC, useCallback, useEffect, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

import { CharacterCardWithState } from '@/components/characterCard'
import { CharactersContainer } from '@/components/charactersContainer'
import { urlPaths } from '@/enums'
import { selectAuth } from '@/features/auth/authSlice'
import { useDatabaseUpdate } from '@/hooks/use-database-update'
import { Character, useGetCharactersByIdQuery } from '@/service/charactersApi'

import { CharactersApi } from '@/service/ResoursesService/CharactersApi'
import { addIsFavoriteForChar } from '@/utils'


const baseCount = 20

const FavoritesPage: FC = () => {
  const { user } = useSelector(selectAuth)
  const [chars, setChars] = useState<CharacterCardWithState[]>([])
  const navigate = useNavigate()
  const { page } = useParams()
  const [favoriteIds, setFavoriteIds] = useState([1])
  const { data } = useGetCharactersByIdQuery(favoriteIds)

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
  }, [currPage, user?.favoriteIds])

  const setAnotherPage = useCallback(
    (nextPage: number) => {
      navigate(`${urlPaths.favorites}${nextPage}`)
    },
    [navigate]
  )

  const pages = user === null ? 0 : Math.ceil(user.favoriteIds.length / baseCount)
  const setCharacters = useCallback(async () => {
    if (currFavoriteIds.length === 0) {
      setChars([])

  useEffect(() => {
    if (data) {
      let arrData

      if (!Array.isArray(data)) {
        arrData = [data]
      } else {
        arrData = data
      }
      const charsWithState = arrData.map(char => addIsFavoriteForChar(char))

      setChars(charsWithState)
    } else {
      //Пробросить ошибку в обработчик
      setChars([])
    }
  }, [data, addIsFavoriteForChar])

  useEffect(() => {
    if (currFavoriteIds.length === 0) {
      setChars([])

      return
    }
    setFavoriteIds(currFavoriteIds)
  }, [currFavoriteIds])

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
