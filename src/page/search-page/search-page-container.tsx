import { FC, useCallback, useEffect, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { CharacterCardWithState } from '@/components/characterCard'
import { GENDER, STATUS, baseInfo } from '@/constants'
import { selectAuth } from '@/features/auth/authSlice'
import { useDatabaseUpdate } from '@/hooks/use-database-update'
import { useQuery } from '@/hooks/use-query'
import { useResourceFiltering } from '@/hooks/use-resource-filtering'
import { Character, Info, useGetCharactersPageQuery } from '@/service/charactersApi'

import { SearchPage } from './search-page'

const SearchPageContainer: FC = () => {
  const [chars, setChars] = useState<CharacterCardWithState[]>([])
  const { user } = useSelector(selectAuth)
  const [info, setInfo] = useState<Info>(baseInfo)
  const query = useQuery()
  const { data } = useGetCharactersPageQuery(query.toString())
  const navigate = useNavigate()

  const {
    handleChange,
    handleChangeInputValue,
    handleFiltersClear,
    handleSearch,
    handleSearchClear,
    search,
    urlParams,
    valueInput,
  } = useResourceFiltering({
    gender: query.get(GENDER) || 'all',
    name: query.get('name') || '',
    status: query.get(STATUS) || 'all',
  })

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

  const addIsFavoriteForChar = useCallback(
    (char: Character) => {
      const isFavorite = user === null ? false : user.favoriteIds.includes(char.id)

      return { ...char, isFavorite }
    },
    [user?.favoriteIds]
  )

  useEffect(() => {
    if (data) {
      const charsWithState = data.results.map(char => addIsFavoriteForChar(char))

      setChars(charsWithState)
      setInfo(data.info)
    } else {
      setChars([])
      setInfo(baseInfo)
    }
  }, [addIsFavoriteForChar, data])

  useEffect(() => {
    setAnotherPage(1)
  }, [setAnotherPage])

  useDatabaseUpdate(user)

  return (
    <SearchPage
      chars={chars}
      currPage={currPage}
      handleChange={handleChange}
      handleChangeInputValue={handleChangeInputValue}
      handleFiltersClear={handleFiltersClear}
      handleSearch={handleSearch}
      handleSearchClear={handleSearchClear}
      info={info}
      search={search}
      setAnotherPage={setAnotherPage}
      valueInput={valueInput}
    />
  )
}

export default SearchPageContainer
