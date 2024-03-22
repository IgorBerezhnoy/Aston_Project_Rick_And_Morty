import { FC } from 'react'

import { ICharacter } from '@/service/ResoursesService/CharactersApi'

import s from './characterList.module.scss'

import { CharacterCard } from '../characterCard'

export interface ICharacterList {
  chars: ICharacter[]
}

export const CharacterList: FC<ICharacterList> = ({ chars }) => {
  return (
    <section className={s.character}>
      <ul className={s.character__list}>
        {chars.map(char => (
          <CharacterCard char={char} key={char.id} />
        ))}
      </ul>
    </section>
  )
}
