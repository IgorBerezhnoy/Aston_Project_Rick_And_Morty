import { FC, useCallback, useEffect, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

import { CardPage } from '@/components/cardPage'
import { CharacterCardWithState } from '@/components/characterCard'
import { CharactersContainer } from '@/components/charactersContainer'
import { urlPaths } from '@/enums'
import { selectAuth } from '@/features/auth/authSlice'
import { useDatabaseUpdate } from '@/hooks/use-database-update'
import { useGetCharactersByIdQuery } from '@/service/charactersApi'
import { addIsFavoriteForChar } from '@/utils'

const baseCount = 20

const FavoritesPage: FC = () => {
  const { user } = useSelector(selectAuth)
  const [chars, setChars] = useState<CharacterCardWithState[]>([])
  const navigate = useNavigate()
  const { page } = useParams()
  const [favoriteIds, setFavoriteIds] = useState([0])
  const { data, isError } = useGetCharactersByIdQuery(favoriteIds)

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
  if (isError) {
    return <CardPage title={"You don't have any favorite"} />
  }

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
