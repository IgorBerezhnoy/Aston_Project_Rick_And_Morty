/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useCallback, useEffect, useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { Button } from '@/components/button'
import { CharacterList } from '@/components/characterList'
import { Filters } from '@/components/filters'
import { FiltersContainer } from '@/components/filtersContainer'
import { Pagination } from '@/components/pagination'
import { Search } from '@/components/search'
import { useResize } from '@/hooks/use-resize'
import useResourceFiltering from '@/hooks/use-resource-filtering'
import { Character, CharactersApi } from '@/service/ResoursesService/CharactersApi'
import { Info } from '@/service/ServicePrototype'

import s from './search-page.module.scss'

const baseInfo = {
  count: 826,
  next: null,
  pages: 42,
  prev: null,
}

export interface ISearch {
  gender: string
  name: string
  status: string
}

export const SearchPage: FC = () => {
  const [chars, setChars] = useState<Character[]>([])
  const [info, setInfo] = useState<Info>(baseInfo)
  const [isPopup, setIsPopup] = useState(false)
  const { query } = useParams()
  const navigate = useNavigate()

  const { handleButtonClier, handleChange, handleSearch, search, urlParams } =
    useResourceFiltering()
  const width = useResize()

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
        setInfo({
          count: 20,
          next: null,
          pages: 1,
          prev: null,
        })
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

  const pageSize = Math.ceil(info.count / info.pages)
  const isDesctop = width > 910

  return (
    <>
      <section className={`${s.page__section} ${s.page__section_search}`}>
        <Search clearValue={handleButtonClier} onChange={handleChange} value={search.name} />
      </section>
      <div className={s.page__container}>
        {isDesctop ? (
          <Filters cbClier={handleButtonClier} cbRadio={handleSearch} state={search} />
        ) : (
          <Button
            // eslint-disable-next-line react/no-children-prop
            children={'Filters'}
            className={s.page__button}
            disabled={false}
            onClick={handleFilterPopup}
            variant={'secondary'}
          />
        )}
        <section className={s.page__section}>
          <CharacterList chars={chars} style={{ marginTop: '65px' }} />
          <Pagination
            currentPage={currPage}
            onPageChange={setAnotherPage}
            pageSize={pageSize}
            stepValue={5}
            totalCount={info.count}
          />
        </section>
      </div>
      <FiltersContainer
        cbClier={handleButtonClier}
        cbPopup={handleFilterPopup}
        cbRadio={handleSearch}
        isPopup={isPopup}
        state={search}
      />
    </>
  )
}
