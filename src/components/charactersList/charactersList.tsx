import { FC } from 'react'

import clsx from 'clsx'

import s from './charactersList.module.scss'

import { CharacterCard, CharacterCardWithState } from '../characterCard'

type CharacterListProps = {
  chars: CharacterCardWithState[]
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
