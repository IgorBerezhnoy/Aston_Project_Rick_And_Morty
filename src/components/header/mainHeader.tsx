import { JSX } from 'react'

import { Logo } from '@/assets/logo/logo'
import { Avatar } from '@/components/avatar'
import { Button } from '@/components/button'
import { Header } from '@/components/header/header'
import { clsx } from 'clsx'

import s from './header.module.scss'

export const MainHeader = ({ isAuth, name }: Props): JSX.Element => {
  return (
    <Header className={clsx(s.header)}>
      <div className={s.wrapper}>
        <div className={s.logo}>
          <a href={'/'}>
            <Logo />
          </a>
        </div>
        {isAuth ? (
          <Avatar className={s.avatar} name={name} size={52} />
        ) : (
          <Button className={s.button}>Sign In</Button>
        )}
      </div>
    </Header>
  )
}

interface Props {
  isAuth: boolean
  name: string
}
