import { FC } from 'react'

import { getPageSize } from '@/utils'

import s from './charactersContainer.module.scss'

import { CardPage } from '../cardPage'
import { CharacterCardWithState } from '../characterCard'
import { CharactersList } from '../charactersList'
import { Pagination } from '../pagination'

const stepValue = 5

type CharacterContainerProps = {
  chars: CharacterCardWithState[]
  count: number
  currPage: number
  isError?: boolean
  pages: number
  setAnotherPage: (page: number) => void
}

export const CharactersContainer: FC<CharacterContainerProps> = ({
  chars,
  count,
  currPage,
  isError,
  pages,
  setAnotherPage,
}) => {
  const pageSize = getPageSize(count, pages)

  return (
    <section className={s.page__section}>
      {isError ? (
        <CardPage title={'Characters not Found'} />
      ) : (
        <>
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
        </>
      )}
    </section>
  )
}
