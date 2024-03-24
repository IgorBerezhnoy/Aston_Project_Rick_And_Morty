import { FC, useCallback, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { CharacterList } from '@/components/characterList'
import { Filters } from '@/components/filters'
import { Pagination } from '@/components/pagination'
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
  status: 'all',
}

export interface ISearch {
  gender: string
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

  const handleClick = useCallback(
    (nextPage: number) => {
      navigate(`/search/${nextPage}`)
    },
    [navigate]
  )

  async function setCharacters(page: number) {
    const resObject = await CharactersApi.getCharacterPage(page, search)

    if (resObject.data) {
      setChars(resObject.data.results)
      setInfo(resObject.data.info)
    }
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
  }, [search])

  const pageSize = Math.ceil(info.count / info.pages)

  return (
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
  )
}
