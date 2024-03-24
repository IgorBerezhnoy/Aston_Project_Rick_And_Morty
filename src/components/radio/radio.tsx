import { FC } from 'react'

import { Indicator, Item } from '@radix-ui/react-radio-group'

import s from './radio.module.scss'

interface IRadio {
  value: string
}

export const Radio: FC<IRadio> = ({ value }) => (
  <div style={{ alignItems: 'center', display: 'flex' }}>
    <Item className={s.RadioGroupItem} id={value} value={value}>
      <Indicator className={s.RadioGroupIndicator} />
    </Item>
    <label className={s.Label} htmlFor={value}>
      {value}
    </label>
  </div>
)
