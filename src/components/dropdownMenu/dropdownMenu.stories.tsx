import type { Meta, StoryObj } from '@storybook/react'

import { Bookmark, LogOut, SearchIcon } from '@/assets/icons'
import { Avatar } from '@/components/avatar'
import { DropDownItem } from '@/components/dropdownMenu/dropDownItem'
import { DropdownMenu } from '@/components/dropdownMenu/dropdownMenu'
import { DropdownSeparator } from '@/components/dropdownMenu/dropdownSeparator'

import s from './dropdown.module.scss'

const meta = {
  component: DropdownMenu,
  tags: ['autodocs'],
  title: 'Components/UI/DropdownMenu',
} satisfies Meta<typeof DropdownMenu>

export default meta
type Story = StoryObj<typeof meta>

export const WithUser: Story = {
  args: {
    children: (
      <div className={s.wrapper}>
        <DropDownItem>
          <div className={s.photoAndEmail}>
            <Avatar name={'Nick'} size={52} />
            <div className={s.userName}>{'Nick'}</div>
          </div>
        </DropDownItem>
        <DropdownSeparator />
        <DropDownItem>
          <a className={s.dropdownItem} href={'/'}>
            <Bookmark className={s.icons} />
            <div>Favorites</div>
          </a>
        </DropDownItem>
        <DropdownSeparator />
        <DropDownItem>
          <a className={s.dropdownItem} href={'/'}>
            <SearchIcon className={s.icons} />
            <div>History</div>
          </a>
        </DropDownItem>
        <DropdownSeparator />

        <DropDownItem>
          <a className={s.dropdownItem} href={'/'}>
            <LogOut className={s.icons} />
            <div>Log Оut</div>
          </a>
        </DropDownItem>
      </div>
    ),
    classNameTrigger: s.storyBookTrigger,
    defaultOpen: true,
    trigger: (
      <div className={s.nameAndAvatar}>
        <div className={s.name}>{'name'}</div>
        <Avatar className={s.avatar} name={'name'} size={52} />
      </div>
    ),
  },
}
