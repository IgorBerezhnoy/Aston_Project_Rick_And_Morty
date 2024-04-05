import { FC } from 'react'
import { Link } from 'react-router-dom'

import { Star, StarOutline } from '@/assets/icons'
import { urlPaths } from '@/enums'
import { addFavoriteById, deleteFavoriteById, selectAuth } from '@/features/auth/authSlice'
import { useAppDispatch, useAppSelector } from '@/hooks/use-appDispatch'
import { Character } from '@/service/charactersApi'
import clsx from 'clsx'

import s from './characterCard.module.scss'

export interface CharacterCardWithState extends Character {
  isFavorite: boolean
}

type CharacterCardProps = {
  char: CharacterCardWithState
}

export const CharacterCard: FC<CharacterCardProps> = ({ char }) => {
  const { isAuth } = useAppSelector(selectAuth)
  const dispatch = useAppDispatch()
  const { id, image, isFavorite, name, origin, species } = char

  function handleButtonClick() {
    if (isFavorite) {
      dispatch(deleteFavoriteById({ favoriteId: id }))
    } else {
      dispatch(addFavoriteById({ favoriteId: id }))
    }
  }

  return (
    <li className={s.card}>
      <Link className={s.card__link} to={`${urlPaths.character}${id}`}>
        <img alt={name} className={s.card__image} src={image} />
      </Link>
      <h3 className={s.card__title}>{name}</h3>
      <p className={s.card__text}>{species}</p>
      <p className={s.card__text}>{origin.name}</p>
      {isAuth && (
        <button
          className={clsx(s.card__button, s.button)}
          onClick={handleButtonClick}
          title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          type={'button'}
        >
          {isFavorite ? (
            <Star className={s.card__icon} />
          ) : (
            <StarOutline className={s.card__icon} />
          )}
        </button>
      )}
    </li>
  )
}
