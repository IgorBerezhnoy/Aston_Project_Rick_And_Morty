import { ChangeEvent, useCallback, useMemo, useState } from 'react'

import { genders, statuses } from '@/enums'
import { addHistory } from '@/features/auth/authSlice'

import { useAppDispatch } from './use-appDispatch'

const baseSearch = {
  gender: 'all',
  name: '',
  status: 'all',
}

export type SearchProps = {
  gender: string
  name: string
  status: string
}

export const useResourceFiltering = (query = baseSearch) => {
  const [search, setSearch] = useState(query)
  const [valueInput, setValueInput] = useState(query.name)
  const dispatch = useAppDispatch()

  const handleSearch = useCallback(
    (name: string, value: string) => {
      setSearch({
        ...search,
        [name]: value,
      })
    },
    [search]
  )

  const handleFiltersClear = useCallback(() => {
    setSearch({
      ...search,
      gender: genders.all,
      status: statuses.all,
    })
  }, [search])

  const handleSearchClear = useCallback(() => {
    setValueInput('')
    handleSearch('name', '')
  }, [handleSearch])

  const createUrlParams = useCallback((object: SearchProps) => {
    let str = ''

    for (const param of Object.entries(object)) {
      if (param[1] !== 'all' && param[1] !== '') {
        str += `&${param[0]}=${param[1]}`
      }
    }

    return str
  }, [])

  const urlParams = useMemo(() => createUrlParams(search), [createUrlParams, search])

  const handleChange = (value: string) => {
    handleSearch('name', value)
    const path = createUrlParams({
      ...search,
      name: value,
    })

    dispatch(addHistory({ name: value, path }))
  }

  const handleChangeInputValue = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValueInput(e.currentTarget.value)
  }, [])

  return {
    handleChange,
    handleChangeInputValue,
    handleFiltersClear,
    handleSearch,
    handleSearchClear,
    search,
    urlParams,
    valueInput,
  }
}
