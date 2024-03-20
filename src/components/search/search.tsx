import { CloseIcon, SearchIcon } from '@/assets/icons'
import { TextField, TextFieldProps } from '@/components/textField'

import s from './search.module.scss'

export interface SearchProps extends TextFieldProps {
  clearValue: () => void
  onSearch?: () => void
  variant?: 'big' | 'default'
}

export const Search = ({ clearValue, onSearch, value, ...rest }: SearchProps) => {
  return (
    <span className={s.wrapper}>
      <SearchIcon className={s.searchIcon} onClick={onSearch} />
      {value && <CloseIcon className={s.clearIcon} />}
      <TextField
        className={s.textField}
        classNameWrapper={s.textFieldWrapper}
        value={value}
        {...rest}
      />
    </span>
  )
}
