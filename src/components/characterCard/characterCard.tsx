import { FC } from 'react'
import { Link } from 'react-router-dom'

import { Character } from '@/service/ResoursesService/CharactersApi'

import s from './characterCard.module.scss'

type CharacterCardProps = {
  char: Character
}

export const CharacterCard: FC<CharacterCardProps> = ({ char }) => {
  const { id, image, name, origin, species } = char

  return (
    <li className={s.card}>
      <Link className={s.card__link} to={`/character/${id}`}>
        <img alt={name} className={s.card__image} src={image} />
      </Link>
      <h3 className={s.card__title}>{name}</h3>
      <p className={s.card__text}>{species}</p>
      <p className={s.card__text}>{origin.name}</p>
    </li>
  )
}
