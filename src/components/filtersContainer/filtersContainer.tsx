import { CSSProperties, FC, MouseEventHandler } from 'react'

import { ISearch } from '@/page/search-page'

import s from './filtersContainer.module.scss'

import { Filters } from '../filters'

interface IFilters {
  cbClier: () => void
  cbPopup: () => void
  cbRadio: (name: string, value: string) => void
  isPopup: boolean
  state: ISearch
  style?: CSSProperties
}

export const FiltersContainer: FC<IFilters> = ({ cbPopup, isPopup, ...props }) => {
  function handlePopup(event: MouseEventHandler<HTMLDivElement>) {
    if (event.target === event.currentTarget) {
      cbPopup()
    }
  }

  //Без понятия как это править :(

  return (
    <div className={`${s.popup} ${isPopup ? s.popup_active : ''}`} onClick={handlePopup}>
      <div className={s.popup__container}>
        <Filters {...props} />
      </div>
    </div>
  )
}
