import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { ErrorBoundary } from '@/components/errorBoundary/errorBoundary'
import { CharacterPage } from '@/page/character-page/character-page'
import { useGetCharacterByIdQuery } from '@/service/charactersApi'

const CharacterPageContainer = () => {
  const { id } = useParams()
  const [state, setState] = useState<number>(1)
  const { data = null } = useGetCharacterByIdQuery(state)

  useEffect(() => {
    if (id) {
      setState(+id)
    }
  }, [id])

  if (!id || +id > 828) {
    return <></>
  }
  if (!data) {
    return <></>
  }

  // TODO пока заглушка
  return (
    <ErrorBoundary>
      <CharacterPage char={data} />
    </ErrorBoundary>
  )
}

export default CharacterPageContainer
