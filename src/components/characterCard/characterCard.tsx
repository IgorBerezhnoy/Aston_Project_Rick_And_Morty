import { FC } from 'react'

import { ICharacter } from '@/service/ResoursesService/CharactersApi'

import './characterCard.modules.scss'

export interface ICharacterCard {
  char: ICharacter
}

export const CharacterCard: FC<ICharacterCard> = ({ char }) => {
  const { image, name, origin, species } = char

  return (
    <li className={'card'}>
      <a className={'card__link'} href={'#'}>
        <img alt={name} className={'card__image'} src={image} />
      </a>
      <h3 className={'card__title'}>{name}</h3>
      <p className={'card__text'}>{species}</p>
      <p className={'card__text'}>{origin.name}</p>
    </li>
  )
}
