import { Character } from '@/service/ResoursesService/CharactersApi'

import s from './characterPage.module.scss'

import { CharacterPlaceholder } from '../characterPlaceholder'
import { CharacterImageContainer } from './lib/characterImageContainer'
import { CharacterLabels } from './lib/characterLabels'
import { CharacterNameContainer } from './lib/characterNameContainer'

type CharacterPageProps = {
  char: Character
}

export const CharacterPage = ({ char }: CharacterPageProps) => {
  return (
    <div className={s.characterName}>
      <CharacterPlaceholder name={char.name} />

      <div className={s.characterContentConteiner}>
        <CharacterNameContainer name={char.name} />

        <CharacterImageContainer img={char.image} name={char.name} />

        <CharacterLabels char={char} />
      </div>
    </div>
  )
}
