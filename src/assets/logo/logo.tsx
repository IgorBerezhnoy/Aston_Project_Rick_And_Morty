import { DetailedHTMLProps, HTMLAttributes, JSX } from 'react'

import { clsx } from 'clsx'

import s from './logo.module.scss'

import img from './../../../public/Logo.png'

export const Logo = ({ children, className, ...rest }: Props): JSX.Element => {
  return <img alt={'Logo'} src={img} {...rest} className={clsx(s.logo, className)} />
}

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLImageElement>, HTMLImageElement> {}
