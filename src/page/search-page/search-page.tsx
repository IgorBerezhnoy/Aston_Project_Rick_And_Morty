import { FC, useCallback, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { CharacterList } from '@/components/characterList'
import { Pagination } from '@/components/pagination'
import { CharactersApi, ICharacter } from '@/service/ResoursesService/CharactersApi'

export const SearchPage: FC = () => {
  const [chars, setChars] = useState<ICharacter[]>([])
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
      setChars(resObject.data)
    }
  }

  useEffect(() => {
    const page = currentPage()

    getCharacters(page)
  }, [currentPage])

  return (
    <>
      <CharacterList chars={chars} />
      <Pagination
        currentPage={currentPage()}
        onPageChange={handleClick}
        pageSize={20}
        stepValue={5}
        totalCount={826}
      />
    </>
  )
}
