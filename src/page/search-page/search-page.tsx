/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useCallback, useEffect, useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { useResourceFiltering } from '@/hooks/use-resource-filtering'
import { Character, CharactersApi } from '@/service/ResoursesService/CharactersApi'
import { Info } from '@/service/ServicePrototype'

import { SearchPageContainer } from './search-page-container'

const baseInfo = {
  count: 0,
  next: null,
  pages: 0,
  prev: null,
}

export const SearchPage: FC = () => {
  const [chars, setChars] = useState<Character[]>([])
  const [info, setInfo] = useState<Info>(baseInfo)
  const { query } = useParams()
  const navigate = useNavigate()

  const { handleButtonClear, handleChange, handleSearch, search, urlParams } =
    useResourceFiltering()

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

  return (
    <SearchPageContainer
      chars={chars}
      currPage={currPage}
      handleButtonClear={handleButtonClear}
      handleChange={handleChange}
      handleSearch={handleSearch}
      info={info}
      search={search}
      setAnotherPage={setAnotherPage}
    />
  )
}
