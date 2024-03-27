import { FC } from 'react'

import { Character } from '@/service/ResoursesService/CharactersApi'
import { Info } from '@/service/ServicePrototype'
import { getPageSize } from '@/utils'

import s from './charactersContainer.module.scss'

import { CharactersList } from '../charactersList'
import { Pagination } from '../pagination'

const stepValue = 5

type CharacterContainerProps = {
  chars: Character[]
  currPage: number
  info: Info
  setAnotherPage: (page: number) => void
}

export const CharactersContainer: FC<CharacterContainerProps> = ({
  chars,
  currPage,
  info,
  setAnotherPage,
}) => {
  const { count, pages } = info
  const pageSize = getPageSize(count, pages)

  return (
    <section className={s.page__section}>
      <CharactersList chars={chars} className={s.page__list} />
      {pages > 1 && (
        <Pagination
          currentPage={currPage}
          onPageChange={setAnotherPage}
          pageSize={pageSize}
          stepValue={stepValue}
          totalCount={count}
        />
      )}
    </section>
  )
}
