import { FC, MouseEvent } from 'react'

import clsx from 'clsx'

import s from './filtersContainer.module.scss'

import { Filters, FiltersProps } from '../filters'

interface FiltersContainerProps extends FiltersProps {
  cbPopup: () => void
  isPopup: boolean
}

export const FiltersContainer: FC<FiltersContainerProps> = ({ cbPopup, isPopup, ...props }) => {
  function handlePopup(event: MouseEvent<HTMLDivElement>) {
    if (event.target === event.currentTarget) {
      cbPopup()
    }
  }

  return (
    <div className={clsx(s.popup, isPopup && s.popup_active)} onClick={handlePopup}>
      <div className={s.popup__container}>
        <Filters {...props} />
      </div>
    </div>
  )
}
