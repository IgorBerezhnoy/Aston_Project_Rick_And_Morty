import { FC } from 'react'

import { Indicator, Item } from '@radix-ui/react-radio-group'

import './radio.module.scss'

interface IRadio {
  labelText: string
}

export const Radio: FC<IRadio> = ({ labelText }) => (
  <div style={{ alignItems: 'center', display: 'flex' }}>
    <Item className={'RadioGroupItem'} id={'r1'} value={'default'}>
      <Indicator className={'RadioGroupIndicator'} />
    </Item>
    <label className={'Label'} htmlFor={'r1'}>
      {labelText}
    </label>
  </div>
)
