import { ChangeEvent, useCallback, useMemo, useState } from 'react'

import { genders, statuses } from '@/enums'

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
    setSearch({
      ...search,
      name: '',
    })
  }, [search])

  const urlParams = useMemo(() => {
    let str = ''

    for (const param of Object.entries(search)) {
      if (param[1] !== 'all' && param[1] !== '') {
        str += `&${param[0]}=${param[1]}`
      }
    }

    return str
  }, [search])

  const handleChange = useCallback(
    (value: string) => {
      handleSearch('name', value)
    },
    [handleSearch]
  )
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
