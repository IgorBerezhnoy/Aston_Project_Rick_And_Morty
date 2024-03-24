import { Root } from '@radix-ui/react-radio-group'

import s from './radioContainer.module.scss'

import { genders, statuses } from '../constants/constants'
import { Radio } from '../radio'

export const RadioContainer = () => (
  <article>
    <form>
      <Root className={s.RadioGroupRoot} name={'gender'}>
        {genders.map((gender, index) => (
          <Radio key={index} value={gender} />
        ))}
      </Root>
      <Root className={s.RadioGroupRoot} name={'status'}>
        {statuses.map((status, index) => (
          <Radio key={index} value={status} />
        ))}
      </Root>
    </form>
  </article>
)
