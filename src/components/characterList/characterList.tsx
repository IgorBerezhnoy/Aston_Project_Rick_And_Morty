import { CSSProperties, FC } from 'react'

import { Character } from '@/service/ResoursesService/CharactersApi'

import s from './characterList.module.scss'

import { CharacterCard } from '../characterCard'

export interface ICharacterList {
  chars: Character[]
  style?: CSSProperties
}

export const CharacterList: FC<ICharacterList> = ({ chars, ...arg }) => {
  return (
    <div className={`${s.character}`} style={arg.style}>
      <ul className={s.character__list}>
        {chars.map(char => (
          <CharacterCard char={char} key={char.id} />
        ))}
      </ul>
    </div>
  )
}
