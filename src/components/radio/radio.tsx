import { FC } from 'react'

import { Indicator, Item } from '@radix-ui/react-radio-group'

import s from './radio.module.scss'

type RadioProps = {
  value: string
}

export const Radio: FC<RadioProps> = ({ value }) => (
  <div className={s.radioGroup__container}>
    <Item className={s.radioGroup__item} id={value} value={value}>
      <Indicator className={s.radioGroup__indicator} />
    </Item>
    <label className={s.label} htmlFor={value}>
      {value}
    </label>
  </div>
)
