import { FC } from 'react'

import { ICharacter } from '@/service/ResoursesService/CharactersApi'

import './characterList.modules.scss'

import { CharacterCard } from '../characterCard'

export interface ICharacterList {
  chars: ICharacter[]
}

export const CharacterList: FC<ICharacterList> = ({ chars }) => {
  return (
    <section className={'character'}>
      <ul className={'character__list'}>
        {chars.map(char => (
          <CharacterCard char={char} key={char.id} />
        ))}
      </ul>
    </section>
  )
}
