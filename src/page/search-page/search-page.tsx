/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useCallback, useEffect, useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { Button } from '@/components/button'
import { CharacterList } from '@/components/characterList'
import { Filters } from '@/components/filters'
import { FiltersContainer } from '@/components/filtersContainer'
import { Pagination } from '@/components/pagination'
import { Search } from '@/components/search'
import { useResourceFiltering } from '@/hooks/use-resource-filtering'
import { Character, CharactersApi } from '@/service/ResoursesService/CharactersApi'
import { Info } from '@/service/ServicePrototype'
import { getPageSize } from '@/utils'

import s from './search-page.module.scss'

const stepValue = 5

const baseInfo = {
  count: 0,
  next: null,
  pages: 0,
  prev: null,
}

export const SearchPage: FC = () => {
  const [chars, setChars] = useState<Character[]>([])
  const [info, setInfo] = useState<Info>(baseInfo)
  const [isPopup, setIsPopup] = useState<boolean>(false)
  const { query } = useParams()
  const navigate = useNavigate()

  const { handleButtonClear, handleChange, handleSearch, search, urlParams } =
    useResourceFiltering()

  const handleFilterPopup = () => {
    setIsPopup(!isPopup)
  }

  const currPage = useMemo(() => {
    if (query === undefined) {
      return 1
    }

    return +query
  }, [query])

  const setAnotherPage = useCallback(
    (nextPage: number) => {
      navigate(`/search/${nextPage}`)
    },
    [navigate]
  )

  const setCharacters = useCallback(
    async (page: number) => {
      const resObject = await CharactersApi.getCharacterPage(page, urlParams)

      if (resObject.data) {
        setChars(resObject.data.results)
        setInfo(resObject.data.info)
      } else {
        setChars([])
        setInfo(baseInfo)
      }
    },
    [urlParams]
  )

  //Зависимости не менять, можете получить зацикленность
  useEffect(() => {
    setCharacters(currPage)
  }, [currPage])

  useEffect(() => {
    if (currPage === 1) {
      setCharacters(1)
    }
    setAnotherPage(1)
  }, [urlParams])

  const pageSize = getPageSize(info.count, info.pages)

  return (
    <>
      <section className={`${s.page__section} ${s.page__section_search}`}>
        <Search
          className={s.page__search}
          clearValue={handleButtonClear}
          onChange={handleChange}
          value={search.name}
        />
      </section>
      <div className={s.page__container}>
        <Filters
          cbClear={handleButtonClear}
          cbRadio={handleSearch}
          className={s.page__filters}
          state={search}
        />
        <section className={s.page__section}>
          <CharacterList chars={chars} className={s.page__list} />
          {info.pages > 1 && (
            <Pagination
              currentPage={currPage}
              onPageChange={setAnotherPage}
              pageSize={pageSize}
              stepValue={stepValue}
              totalCount={info.count}
            />
          )}
        </section>
      </div>
      <Button
        // eslint-disable-next-line react/no-children-prop
        children={'Filters'}
        className={s.page__button}
        disabled={false}
        onClick={handleFilterPopup}
        variant={'secondary'}
      />
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
