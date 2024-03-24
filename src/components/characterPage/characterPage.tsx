import { ICharacter } from '@/service/ResoursesService/CharactersApi'

import './characterPage.scss'

import { CharacterLabel } from '../characterLabel'
import { CharacterPlaceholder } from '../characterPlaceholder'

export interface ICharacterPage {
  char: ICharacter
}

export const CharacterPage = ({ char }: ICharacterPage) => {
  return (
    <div className={'character-page'}>
      <CharacterPlaceholder name={char.name} />
      <div className={'character-content-conteiner'}>
        <div className={'character-name-container'}>
          <div className={'character-name'}>
            <h2>{char.name}</h2>
          </div>
        </div>

        <div className={'character-image-container'}>
          <img alt={char.name} className={'character-image'} src={char.image} />
        </div>

        <div className={'character-labels'}>
          <CharacterLabel text={`Gender: ${char.gender}`} />
          <CharacterLabel text={`Species: ${char.species}`} />
          <CharacterLabel text={`Status: ${char.status}`} />
          <CharacterLabel text={`Origin: ${char.origin}`} />
          <CharacterLabel text={`Last location: ${char.location.name}`} />
        </div>
      </div>
    </div>
  )
}
