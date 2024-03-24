import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

import { clsx } from 'clsx'

import s from './header.module.scss'

export const Header = ({ children, className, ...rest }: Props) => {
  return (
    <header className={clsx(s.header, className)} {...rest}>
      {children}
    </header>
  )
}

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
  children: ReactNode
}
