import { ChangeEvent, useCallback, useMemo, useState } from 'react'

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

  const handleSearch = useCallback(
    (name: string, value: string) => {
      setSearch({
        ...search,
        [name]: value,
      })
    },
    [search]
  )

  const handleButtonClear = useCallback(() => {
    setSearch(baseSearch)
  }, [])

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
    (e: ChangeEvent<HTMLInputElement>) => {
      handleSearch('name', e.currentTarget.value)
    },
    [handleSearch]
  )

  return {
    handleButtonClear,
    handleChange,
    handleSearch,
    search,
    urlParams,
  }
}
