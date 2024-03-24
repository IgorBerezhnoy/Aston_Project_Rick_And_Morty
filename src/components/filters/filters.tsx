import { FC } from 'react'

import { ISearch } from '@/page/search-page'
import { Root } from '@radix-ui/react-radio-group'

import s from './filters.module.scss'

import { genders, statuses } from '../constants/constants'
import { Radio } from '../radio'

interface IFilters {
  cbClier: () => void
  cbRadio: (name: string, value: string) => void
  state: ISearch
}

export const Filters: FC<IFilters> = ({ cbClier, cbRadio, state }) => {
  const { gender, status } = state

  const handleStatus = (value: string) => cbRadio('status', value)
  const handleGender = (value: string) => cbRadio('gender', value)
  const handleClier = () => cbClier()

  return (
    <article className={s.RadioGroup}>
      <h2 className={s.RadioGroupTittle}>Filters</h2>
      <button className={s.RadioGroupButton} onClick={handleClier} type={'button'}>
        Clier Filters
      </button>
      <fieldset>
        <h3 className={s.RadioGroupSubTittle}>Gender</h3>
        <Root
          className={s.RadioGroupRoot}
          name={'gender'}
          onValueChange={handleGender}
          value={gender}
        >
          {genders.map((gender, index) => (
            <Radio key={index} value={gender} />
          ))}
        </Root>
        <h3 className={s.RadioGroupSubTittle}>Status</h3>
        <Root
          className={s.RadioGroupRoot}
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
}
