import { CloseIcon, SearchIcon } from '@/assets/icons'
import { TextField, TextFieldProps } from '@/components/textField'
import clsx from 'clsx'

import s from './search.module.scss'

export interface SearchProps extends TextFieldProps {
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
      <TextField className={s.textField} value={value} {...rest} />
    </span>
  )
}
