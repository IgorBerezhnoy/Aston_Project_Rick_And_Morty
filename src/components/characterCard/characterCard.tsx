/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable perfectionist/sort-objects */
/* eslint-disable perfectionist/sort-jsx-props */
import { FC } from 'react'

import { ICharacter } from '@/service/ResoursesService/CharactersApi'

import './characterCard.modules.scss'

export interface ICharacterCard {
  char: ICharacter
}

export const CharacterCard: FC<ICharacterCard> = ({ char }) => {
  const { species, name, origin, image } = char

  return (
    <li className="card">
      <a className="card__link" href="#">
        <img className="card__image" src={image} alt={name} />
      </a>
      <h3 className="card__title">{name}</h3>
      <p className="card__text">{species}</p>
      <p className="card__text">{origin.name}</p>
    </li>
  )
}
