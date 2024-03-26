import { FC, memo } from 'react'

import { SearchProps } from '@/hooks/use-resource-filtering'
import { Root } from '@radix-ui/react-radio-group'
import clsx from 'clsx'

import s from './filters.module.scss'

import { genders, statuses } from '../../constants/constants'
import { Radio } from '../radio'

export interface FiltersProps {
  cbClear: () => void
  cbRadio: (name: string, value: string) => void
  className?: string
  state: SearchProps
}

export const Filters: FC<FiltersProps> = memo(({ cbClear: cbClear, cbRadio, className, state }) => {
  const { gender, status } = state

  const handleStatus = (value: string) => cbRadio('status', value)
  const handleGender = (value: string) => cbRadio('gender', value)

  return (
    <article className={clsx(s.radioGroup, className)}>
      <h2 className={s.radioGroup__tittle}>Filters</h2>
      <button className={s.radioGroup__button} onClick={cbClear} type={'button'}>
        Clear Filters
      </button>
      <fieldset>
        <h3 className={s.radioGroup__subTittle}>Gender</h3>
        <Root
          className={s.radioGroup__root}
          name={'gender'}
          onValueChange={handleGender}
          value={gender}
        >
          {genders.map((gender, index) => (
            <Radio key={index} value={gender} />
          ))}
        </Root>
        <h3 className={s.radioGroup__subTittle}>Status</h3>
        <Root
          className={s.radioGroup__root}
          name={'status'}
          onValueChange={handleStatus}
          value={status}
        >
          {statuses.map((status, index) => (
            <Radio key={index} value={status} />
          ))}
        </Root>
      </fieldset>
    </article>
  )
})
