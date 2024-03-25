import { Link } from 'react-router-dom'

import { Logo } from '@/assets/logo/logo'
import { Button } from '@/components/button'
import { DropdownWithUserContainer } from '@/components/dropdownMenu/dropdownWithUserContainer'
import { Header } from '@/components/header/header'
import { urlPaths } from '@/enum'
import { clsx } from 'clsx'

import s from './header.module.scss'

type Props = {
  isAuth: boolean
  name: string
}

export const MainHeader = ({ isAuth, name }: Props) => {
  return (
    <Header className={clsx(s.header)}>
      <div className={s.wrapper}>
        <div className={s.logo}>
          <Link to={urlPaths.root}>
            <Logo />
          </Link>
        </div>
        {isAuth ? (
          <DropdownWithUserContainer name={name} />
        ) : (
          <Button className={s.button}>Sign In</Button>
        )}
      </div>
    </Header>
  )
}
