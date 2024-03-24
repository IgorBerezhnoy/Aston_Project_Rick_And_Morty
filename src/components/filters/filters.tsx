import { Root } from '@radix-ui/react-radio-group'

import s from './filters.module.scss'

import { genders, statuses } from '../constants/constants'
import { Radio } from '../radio'

export const Filters = () => {
  return (
    <article className={s.RadioGroup}>
      <h2 className={s.RadioGroupTittle}>Filters</h2>
      <button className={s.RadioGroupButton} type={'button'}>
        Clier Filters
      </button>
      <fieldset>
        <h3 className={s.RadioGroupSubTittle}>Gender</h3>
        <Root className={s.RadioGroupRoot} name={'gender'}>
          {genders.map((gender, index) => (
            <Radio key={index} value={gender} />
          ))}
        </Root>
        <h3 className={s.RadioGroupSubTittle}>Status</h3>
        <Root className={s.RadioGroupRoot} name={'status'}>
          {statuses.map((status, index) => (
            <Radio key={index} value={status} />
          ))}
        </Root>
      </fieldset>
    </article>
  )
}
