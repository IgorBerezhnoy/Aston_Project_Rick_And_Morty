import { Star, StarOutline } from '@/assets/icons'
import { selectAuth } from '@/features/auth/authSlice'
import { useAppSelector } from '@/hooks/use-appDispatch'
import clsx from 'clsx'

import s from '../character-page.module.scss'

type Props = {
  cbClick: () => void
  img: string
  isFavorite: boolean
  name: string
}

export const CharacterImageContainer = ({ cbClick, img, isFavorite, name }: Props) => {
  const { isAuth } = useAppSelector(selectAuth)

  return (
    <div className={s.characterImageContainer}>
      <img alt={name} className={s.characterImage} src={img} />
      {isAuth && (
        <button
          className={clsx(s.characterFavoriteButton, s.button)}
          onClick={cbClick}
          title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          type={'button'}
        >
          {isFavorite ? (
            <Star className={s.characterIcon} />
          ) : (
            <StarOutline className={s.characterIcon} />
          )}
        </button>
      )}
    </div>
  )
}
