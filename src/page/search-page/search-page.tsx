import { ChangeEvent, FC, useState } from 'react'

import { Button } from '@/components/button'
import { CharacterCardWithState } from '@/components/characterCard'
import { CharactersContainer } from '@/components/charactersContainer'
import { ErrorBoundary } from '@/components/errorBoundary/errorBoundary'
import { Filters } from '@/components/filters'
import { FiltersContainer } from '@/components/filtersContainer'
import { Search } from '@/components/search'
import { SearchProps } from '@/hooks/use-resource-filtering'
import { Info } from '@/service/ServicePrototype'

import s from './search-page.module.scss'

type SearchPageContainerProps = {
  chars: CharacterCardWithState[]
  currPage: number
  handleButtonClear: () => void
  handleChange: (e: string) => void
  handleChangeInputValue: (e: ChangeEvent<HTMLInputElement>) => void
  handleSearch: (name: string, value: string) => void
  handleSearchClear: () => void
  info: Info
  search: SearchProps
  setAnotherPage: (nextPage: number) => void
  valueInput: string
}

export const SearchPage: FC<SearchPageContainerProps> = ({
  chars,
  currPage,
  handleButtonClear,
  handleChange,
  handleChangeInputValue,
  handleSearch,
  handleSearchClear,
  info,
  search,
  setAnotherPage,
  valueInput,
}) => {
  const [isPopup, setIsPopup] = useState<boolean>(false)

  const handleFilterPopup = () => {
    setIsPopup(!isPopup)
  }

  return (
    <>
      <section className={`${s.page__section} ${s.page__section_search}`}>
        <Search
          className={s.page__search}
          clearValue={handleSearchClear}
          onChange={handleChangeInputValue}
          onDebouncedChange={handleChange}
          value={valueInput}
        />
      </section>
      <div className={s.page__container}>
        <Filters
          cbClear={handleButtonClear}
          cbRadio={handleSearch}
          className={s.page__filters}
          state={search}
        />
        <ErrorBoundary>
          <CharactersContainer
            chars={chars}
            count={info.count}
            currPage={currPage}
            pages={info.pages}
            setAnotherPage={setAnotherPage}
          />
        </ErrorBoundary>
      </div>
      <Button
        className={s.page__button}
        disabled={false}
        onClick={handleFilterPopup}
        variant={'secondary'}
      >
        Filters
      </Button>
      <FiltersContainer
        cbClear={handleButtonClear}
        cbPopup={handleFilterPopup}
        cbRadio={handleSearch}
        isPopup={isPopup}
        state={search}
      />
    </>
  )
}
