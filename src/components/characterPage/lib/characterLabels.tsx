import { CharacterLabel } from '@/components/characterLabel'
import { Character } from '@/service/ResoursesService/CharactersApi'

import s from '../characterPage.module.scss'

type Props = {
  char: Character
}

export const CharacterLabels = ({ char }: Props) => {
  return (
    <div className={s.characterLabels}>
      <CharacterLabel text={`Gender: ${char.gender}`} />
      <CharacterLabel text={`Species: ${char.species}`} />
      <CharacterLabel text={`Status: ${char.status}`} />
      <CharacterLabel text={`Origin: ${char.origin.name}`} />
      <CharacterLabel text={`Last location: ${char.location.name}`} />
    </div>
  )
}
