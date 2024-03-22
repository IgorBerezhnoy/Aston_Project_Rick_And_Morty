import * as Checkbox from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'

import './checkbox.modules.scss'

export const CheckboxDemo = () => (
  <form>
    <div style={{ alignItems: 'center', display: 'flex' }}>
      <Checkbox.Root className={'CheckboxRoot'} defaultChecked id={'c1'}>
        <Checkbox.Indicator className={'CheckboxIndicator'}>
          <CheckIcon />
        </Checkbox.Indicator>
      </Checkbox.Root>
      <label className={'Label'} htmlFor={'c1'}>
        Accept terms and conditions.
      </label>
    </div>
  </form>
)
