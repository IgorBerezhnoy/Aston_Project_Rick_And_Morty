import { CharacterPlaceholder } from '@/components/characterPlaceholder'
import { CharacterImageContainer } from '@/page/character-page/lib/characterImageContainer'
import { CharacterLabels } from '@/page/character-page/lib/characterLabels'
import { CharacterNameContainer } from '@/page/character-page/lib/characterNameContainer'
import { Character } from '@/service/charactersApi'

import s from './character-page.module.scss'

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
