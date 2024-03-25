import { ComponentPropsWithoutRef, ReactNode } from 'react'

import * as DropdownMenuRadix from '@radix-ui/react-dropdown-menu'
import { clsx } from 'clsx'

import s from './dropdown.module.scss'

type Props = {
  children: ReactNode
  classNameTrigger?: string
  trigger: ReactNode
} & ComponentPropsWithoutRef<typeof DropdownMenuRadix.Root>

export const DropdownMenu = ({ children, classNameTrigger, trigger, ...rest }: Props) => {
  return (
    <div className={s.root}>
      <DropdownMenuRadix.Root {...rest}>
        <DropdownMenuRadix.Trigger className={clsx(s.trigger, classNameTrigger)}>
          {trigger}
        </DropdownMenuRadix.Trigger>
        <DropdownMenuRadix.Portal>
          <DropdownMenuRadix.Content className={s.dropdownMenuContent} sideOffset={5}>
            {children}
          </DropdownMenuRadix.Content>
        </DropdownMenuRadix.Portal>
      </DropdownMenuRadix.Root>
    </div>
  )
}
