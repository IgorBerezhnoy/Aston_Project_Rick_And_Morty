import { FC } from 'react'

import { Character } from '@/service/ResoursesService/CharactersApi'
import clsx from 'clsx'

import s from './charactersList.module.scss'

import { CharacterCard } from '../characterCard'

type CharacterListProps = {
  chars: Character[]
  className?: string
}

export const CharactersList: FC<CharacterListProps> = ({ chars, className }) => {
  return (
    <div className={clsx(s.character, className)}>
      <ul className={s.character__list}>
        {chars.map(char => (
          <CharacterCard char={char} key={char.id} />
        ))}
      </ul>
    </div>
  )
}
