import { ChangeEvent, FC, useCallback, useEffect, useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { CharacterList } from '@/components/characterList'
import { Filters } from '@/components/filters'
import { Pagination } from '@/components/pagination'
import { Search } from '@/components/search'
import { Character, CharactersApi } from '@/service/ResoursesService/CharactersApi'
import { Info } from '@/service/ServicePrototype'

const baseInfo = {
  count: 826,
  next: null,
  pages: 42,
  prev: null,
}

const baseSearch = {
  gender: 'all',
  name: '',
  status: 'all',
}

export interface ISearch {
  gender: string
  name: string
  status: string
}

export const SearchPage: FC = () => {
  const [chars, setChars] = useState<Character[]>([])
  const [info, setInfo] = useState<Info>(baseInfo)
  const { query } = useParams()
  const navigate = useNavigate()

  const [search, setSearch] = useState(baseSearch)

  function handleSearch(name: string, value: string) {
    setSearch({
      ...search,
      [name]: value,
    })
  }

  function handleButtonClier() {
    setSearch(baseSearch)
  }

  const currentPage = useCallback(() => {
    if (query === undefined) {
      return 1
    }

    return +query
  }, [query])

  const stringParams = useMemo(() => {
    let str = ''

    for (const param of Object.entries(search)) {
      if (param[1] !== 'all' && param[1] !== '') {
        str += `&${param[0]}=${param[1]}`
      }
    }

    return str
  }, [search])

  const handleClick = useCallback(
    (nextPage: number) => {
      navigate(`/search/${nextPage}${stringParams}`)
    },
    [navigate, stringParams]
  )

  const setCharacters = useCallback(
    async (page: number) => {
      const resObject = await CharactersApi.getCharacterPage(page, stringParams)

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
    [stringParams]
  )

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleSearch('name', e.currentTarget.value)
  }

  useEffect(() => {
    const page = currentPage()

    setCharacters(page)
  }, [currentPage])

  useEffect(() => {
    const page = currentPage()

    if (page === 1) {
      setCharacters(1)
    }
    handleClick(1)
  }, [stringParams])

  const pageSize = Math.ceil(info.count / info.pages)

  return (
    <>
      <Search clearValue={handleButtonClier} onChange={handleChange} value={search.name} />
      <div style={{ display: 'flex', width: '100%' }}>
        <Filters cbClier={handleButtonClier} cbRadio={handleSearch} state={search} />
        <div style={{ width: '100%' }}>
          <CharacterList chars={chars} />
          <Pagination
            currentPage={currentPage()}
            onPageChange={handleClick}
            pageSize={pageSize}
            stepValue={5}
            totalCount={info.count}
          />
        </div>
      </div>
    </>
  )
}
