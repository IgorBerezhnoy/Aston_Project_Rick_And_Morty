import type { Meta, StoryObj } from '@storybook/react'

import { Logo } from '@/assets/logo/logo'
import { Avatar } from '@/components/avatar'
import { Button } from '@/components/button'

import s from './header.module.scss'

import { Header } from './'

const meta: Meta = {
  argTypes: {},
  component: Header,
  tags: ['autodocs'],
  title: 'Components/UI/Header',
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const LogOut: Story = {
  args: {
    children: (
      <div className={s.wrapper}>
        <div className={s.logo}>
          <a href={'/'}>
            <Logo />
          </a>
        </div>
        <Button className={s.button}>Sign In</Button>
      </div>
    ),
  },
}
export const LogIn: Story = {
  args: {
    children: (
      <div className={s.wrapper}>
        <div className={s.logo}>
          <a href={'/'}>
            <Logo />
          </a>
        </div>
        <Avatar className={s.avatar} name={'Nick'} size={52} />
      </div>
    ),
  },
}
