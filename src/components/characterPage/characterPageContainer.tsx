import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { Character, CharactersApi } from '@/service/ResoursesService/CharactersApi'

import { CharacterPage } from './characterPage'

export const CharacterPageContainer = () => {
  const { id } = useParams()
  const [state, setState] = useState<Character | null>(null)

  useEffect(() => {
    if (id) {
      CharactersApi.getCharacterById(+id).then(res => setState(res.data))
    }
  }, [])

  if (!id || +id > 828) {
    return <>Error</>
  }
  if (!state) {
    return <>Error</>
  }

  // TODO пока заглушка
  return <CharacterPage char={state} />
}
