import { FC, useCallback, useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { GENDER, STATUS } from '@/constants'
import { useQuery } from '@/hooks/use-query'
import { useResourceFiltering } from '@/hooks/use-resource-filtering'
import { Character, CharactersApi } from '@/service/ResoursesService/CharactersApi'
import { Info } from '@/service/ServicePrototype'

import { SearchPage } from './search-page'

const baseInfo = {
  count: 0,
  next: null,
  pages: 0,
  prev: null,
}

export const SearchPageContainer: FC = () => {
  const [chars, setChars] = useState<Character[]>([])
  const [info, setInfo] = useState<Info>(baseInfo)
  const query = useQuery()
  const navigate = useNavigate()

  const { handleButtonClear, handleChange, handleSearch, search, urlParams } = useResourceFiltering(
    {
      gender: query.get(GENDER) || 'all',
      name: query.get('name') || '',
      status: query.get(STATUS) || 'all',
    }
  )

  const currPage = useMemo(() => {
    const page = query.get('page')

    if (page === null) {
      return 1
    }

    return +page
  }, [query])

  const setAnotherPage = useCallback(
    (nextPage: number) => {
      navigate(`/search/?page=${nextPage}${urlParams}`)
    },
    [navigate, urlParams]
  )

  const setCharacters = useCallback(async (params: string) => {
    const resObject = await CharactersApi.getCharacterPage(params)

    if (resObject.data) {
      setChars(resObject.data.results)
      setInfo(resObject.data.info)
    } else {
      setChars([])
      setInfo(baseInfo)
    }
  }, [])

  useEffect(() => {
    setCharacters(query.toString())
  }, [setCharacters, query])

  useEffect(() => {
    setAnotherPage(1)
  }, [setAnotherPage])

  return (
    <SearchPage
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
