import { Root } from '@radix-ui/react-radio-group'

import './radioContainer.module.scss'

import { genders, statuses } from '../constants/constants'
import { Radio } from '../radio'

export const RadioContainer = () => (
  <article>
    <form>
      <Root aria-label={'View density'} className={'RadioGroupRoot'} defaultValue={'default'}>
        {genders.map((gender, index) => (
          <Radio key={index} labelText={gender} />
        ))}
      </Root>
      <Root aria-label={'View density'} className={'RadioGroupRoot'} defaultValue={'default'}>
        {statuses.map((status, index) => (
          <Radio key={index} labelText={status} />
        ))}
      </Root>
    </form>
  </article>
)
