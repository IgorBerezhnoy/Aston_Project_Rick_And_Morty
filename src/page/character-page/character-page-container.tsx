import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { ErrorBoundary } from '@/components/errorBoundary/errorBoundary'
import { CharacterPage } from '@/page/character-page/character-page'
import { Character, CharactersApi } from '@/service/ResoursesService/CharactersApi'

const CharacterPageContainer = () => {
  const { id } = useParams()
  const [state, setState] = useState<Character | null>(null)

  useEffect(() => {
    if (id) {
      CharactersApi.getCharacterById(+id).then(res => setState(res.data))
    }
  }, [])

  if (!id || +id > 828) {
    return <></>
  }
  if (!state) {
    return <></>
  }

  // TODO пока заглушка
  return (
    <ErrorBoundary>
      <CharacterPage char={state} />
    </ErrorBoundary>
  )
}

export default CharacterPageContainer
