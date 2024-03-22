import { FC, useCallback, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { Pagination } from '@/components/Pagination'
import { CharacterList } from '@/components/characterList'
import { CharactersApi, ICharacter } from '@/service/ResoursesService/CharactersApi'
import { IInfo } from '@/service/ServicePrototype'

export const SearchPage: FC = () => {
  const [chars, setChars] = useState<ICharacter[]>([])
  const [info, setInfo] = useState<IInfo>({
    count: 826,
    next: null,
    pages: 42,
    prev: null,
  })
  const { query } = useParams()
  const navigate = useNavigate()

  const currentPage = useCallback(() => {
    if (query === undefined) {
      return 1
    }

    return +query
  }, [query])

  function handleClick(nextPage: number) {
    navigate(`/search/${nextPage}`)
  }

  async function getCharacters(page: number) {
    const resObject = await CharactersApi.getCharacterPage(page)

    if (resObject.data) {
      setChars(resObject.data.results)
      setInfo(resObject.data.info)
    }
  }

  useEffect(() => {
    const page = currentPage()

    getCharacters(page)
  }, [currentPage])

  const pageSize = Math.ceil(info.count / info.pages)

  return (
    <>
      <CharacterList chars={chars} />
      <Pagination
        currentPage={currentPage()}
        onPageChange={handleClick}
        pageSize={pageSize}
        stepValue={5}
        totalCount={info.count}
      />
    </>
  )
}
