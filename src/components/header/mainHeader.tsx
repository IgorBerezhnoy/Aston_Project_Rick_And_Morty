import { Link } from 'react-router-dom'

import { Logo } from '@/assets/logo/logo'
import { Button } from '@/components/button'
import { DropdownWithUserContainer } from '@/components/dropdownMenu/dropdownWithUserContainer'
import { Header } from '@/components/header/header'
import { Liner } from '@/components/liner'
import { urlPaths } from '@/enums'
import { clsx } from 'clsx'

import s from './header.module.scss'

type Props = {
  isAuth: boolean
  isLoading?: boolean
  name: string
}

export const MainHeader = ({ isAuth, isLoading, name }: Props) => {
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
          <Link className={s.link} to={urlPaths.signIn}>
            <Button className={s.button} variant={'secondary'}>
              Sign In
            </Button>
          </Link>
        )}
      </div>
      {isLoading && <Liner className={s.liner} />}
    </Header>
  )
}
