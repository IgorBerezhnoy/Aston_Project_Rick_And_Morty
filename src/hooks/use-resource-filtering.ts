import { ChangeEvent, useMemo, useState } from 'react'

const baseSearch = {
  gender: 'all',
  name: '',
  status: 'all',
}

function useResourceFiltering() {
  const [search, setSearch] = useState(baseSearch)

  const handleSearch = (name: string, value: string) => {
    setSearch({
      ...search,
      [name]: value,
    })
  }

  const handleButtonClier = () => {
    setSearch(baseSearch)
  }

  const urlParams = useMemo(() => {
    let str = ''

    for (const param of Object.entries(search)) {
      if (param[1] !== 'all' && param[1] !== '') {
        str += `&${param[0]}=${param[1]}`
      }
    }

    return str
  }, [search])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleSearch('name', e.currentTarget.value)
  }

  return {
    handleButtonClier,
    handleChange,
    handleSearch,
    search,
    urlParams,
  }
}

export default useResourceFiltering
