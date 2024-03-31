import { FC, useCallback, useEffect, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { CharacterCardWithState } from '@/components/characterCard'
import { GENDER, STATUS, baseInfo } from '@/constants'
import { selectAuth } from '@/features/auth/authSlice'
import { useDatabaseUpdate } from '@/hooks/use-database-update'
import { useQuery } from '@/hooks/use-query'
import { useResourceFiltering } from '@/hooks/use-resource-filtering'
import { CharactersApi } from '@/service/ResoursesService/CharactersApi'
import { Info } from '@/service/ServicePrototype'

import { SearchPage } from './search-page'

export const SearchPageContainer: FC = () => {
  const [chars, setChars] = useState<CharacterCardWithState[]>([])
  const { user } = useSelector(selectAuth)
  const [info, setInfo] = useState<Info>(baseInfo)
  const query = useQuery()
  const navigate = useNavigate()

  const {
    handleButtonClear,
    handleChange,
    handleChangeInputValue,
    handleSearch,
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

  useDatabaseUpdate(user)

  const setCharacters = useCallback(
    async (params: string) => {
      const resObject = await CharactersApi.getCharacterPage(params)

      if (resObject.data) {
        const charsWithState = resObject.data.results.map(char => {
          const isFavorite = user === null ? false : user.favoriteIds.includes(char.id)

          return { ...char, isFavorite }
        })

        setChars(charsWithState)
        setInfo(resObject.data.info)
      } else {
        setChars([])
        setInfo(baseInfo)
      }
    },
    [user]
  )

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
      handleChangeInputValue={handleChangeInputValue}
      handleSearch={handleSearch}
      info={info}
      search={search}
      setAnotherPage={setAnotherPage}
      valueInput={valueInput}
    />
  )
}
