import { CloseIcon, SearchIcon } from '@/assets/icons'
import { DebounceInput, DebouncedInput } from '@/utils/debounce'
import clsx from 'clsx'

import s from './search.module.scss'

export type SearchProps = DebounceInput & {
  className?: string
  clearValue?: () => void
  onSearch?: () => void
  variant?: 'big' | 'default'
}

export const Search = ({ className, clearValue, onSearch, value, ...rest }: SearchProps) => {
  return (
    <span className={clsx(s.wrapper, className)}>
      <SearchIcon className={s.searchIcon} onClick={onSearch} />
      {value && <CloseIcon className={s.clearIcon} onClick={clearValue} />}
      <DebouncedInput className={s.textField} value={value} {...rest} />
    </span>
  )
}
