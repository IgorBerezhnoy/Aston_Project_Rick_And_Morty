import { FC } from 'react'

import { ICharacter } from '@/service/ResoursesService/CharactersApi'

import s from './characterCard.module.scss'

export interface ICharacterCard {
  char: ICharacter
}

export const CharacterCard: FC<ICharacterCard> = ({ char }) => {
  const { image, name, origin, species } = char

  return (
    <li className={s.card}>
      <a className={s.card__link} href={'#'}>
        <img alt={name} className={'card__image'} src={image} />
      </a>
      <h3 className={s.card__title}>{name}</h3>
      <p className={s.card__text}>{species}</p>
      <p className={s.card__text}>{origin.name}</p>
    </li>
  )
}
