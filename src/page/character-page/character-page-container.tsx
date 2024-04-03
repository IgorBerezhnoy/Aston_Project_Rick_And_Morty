import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { CardPage } from '@/components/cardPage'
import { ErrorBoundary } from '@/components/errorBoundary/errorBoundary'
import { CharacterPage } from '@/page/character-page/character-page'
import { useGetCharacterByIdQuery } from '@/service/charactersApi'

const CharacterPageContainer = () => {
  const { id } = useParams()
  const [state, setState] = useState<number>(1)
  const { data, isError } = useGetCharacterByIdQuery(state)

  useEffect(() => {
    if (id) {
      setState(+id)
    }
  }, [id])
  if (isError) {
    return <CardPage title={'Sorry, this page is not found'} />
  }

  return <ErrorBoundary>{!id || !data ? <></> : <CharacterPage char={data} />}</ErrorBoundary>
}

export default CharacterPageContainer
