import { Character } from '@/service/ResoursesService/CharactersApi'

import s from './characterPage.module.scss'

import { CharacterLabel } from '../characterLabel'
import { CharacterPlaceholder } from '../characterPlaceholder'

type CharacterPageProps = {
  char: Character
}

export const CharacterPage = ({ char }: CharacterPageProps) => {
  return (
    <div className={s.characterName}>
      <CharacterPlaceholder name={char.name} />
      <div className={s.characterContentConteiner}>
        <div className={s.characterNameContainer}>
          <div className={s.characterName}>
            <h2>{char.name}</h2>
          </div>
        </div>

        <div className={s.characterImageContainer}>
          <img alt={char.name} className={s.characterImage} src={char.image} />
        </div>

        <div className={s.characterLabels}>
          <CharacterLabel text={`Gender: ${char.gender}`} />
          <CharacterLabel text={`Species: ${char.species}`} />
          <CharacterLabel text={`Status: ${char.status}`} />
          <CharacterLabel text={`Origin: ${char.origin.name}`} />
          <CharacterLabel text={`Last location: ${char.location.name}`} />
        </div>
      </div>
    </div>
  )
}
