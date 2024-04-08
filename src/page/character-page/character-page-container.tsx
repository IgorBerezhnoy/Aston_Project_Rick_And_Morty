import { useCallback, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { CardPage } from '@/components/cardPage'
import { ErrorBoundary } from '@/components/errorBoundary/errorBoundary'
import { addFavoriteById, deleteFavoriteById, selectAuth } from '@/features/auth/authSlice'
import { useAppDispatch } from '@/hooks/use-appDispatch'
import { CharacterPage } from '@/page/character-page/character-page'
import { useGetCharacterByIdQuery } from '@/service/charactersApi'

const CharacterPageContainer = () => {
  const { id } = useParams()
  const [state, setState] = useState<number>(1)
  const { data, isError } = useGetCharacterByIdQuery(state)
  const { user } = useSelector(selectAuth)
  const [isFavorite, setIsFavorite] = useState(false)
  const dispatch = useAppDispatch()

  const handleButtonClick = useCallback(() => {
    if (id) {
      if (isFavorite) {
        dispatch(deleteFavoriteById({ favoriteId: +id }))
      } else {
        dispatch(addFavoriteById({ favoriteId: +id }))
      }
    }
  }, [dispatch, id, isFavorite])

  useEffect(() => {
    if (id) {
      const numId = +id

      setState(numId)
      if (user) {
        setIsFavorite(user.favoriteIds.includes(numId))
      }
    }
  }, [id, user?.favoriteIds])

  if (isError) {
    return <CardPage title={'Sorry, this page is not found'} />
  }

  return (
    <ErrorBoundary>
      {!id || !data ? (
        <></>
      ) : (
        <CharacterPage cbClick={handleButtonClick} char={data} isFavorite={isFavorite} />
      )}
    </ErrorBoundary>
  )
}

export default CharacterPageContainer
