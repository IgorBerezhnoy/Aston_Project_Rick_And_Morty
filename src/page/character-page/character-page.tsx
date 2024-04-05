import { CharacterPlaceholder } from '@/components/characterPlaceholder'
import { CharacterImageContainer } from '@/page/character-page/lib/characterImageContainer'
import { CharacterLabels } from '@/page/character-page/lib/characterLabels'
import { CharacterNameContainer } from '@/page/character-page/lib/characterNameContainer'
import { Character } from '@/service/charactersApi'

import s from './character-page.module.scss'

import { CharacterShare } from './lib/characterShare'

type CharacterPageProps = {
  cbClick: () => void
  char: Character
  isFavorite: boolean
}

export const CharacterPage = ({ cbClick, char, isFavorite }: CharacterPageProps) => {
  return (
    <div className={s.characterName}>
      <CharacterPlaceholder name={char.name} />

      <div className={s.characterContentConteiner}>
        <CharacterNameContainer name={char.name} />

        <CharacterImageContainer
          cbClick={cbClick}
          img={char.image}
          isFavorite={isFavorite}
          name={char.name}
        />

        <CharacterLabels char={char} />
        <CharacterShare name={char.name} />
      </div>
    </div>
  )
}
