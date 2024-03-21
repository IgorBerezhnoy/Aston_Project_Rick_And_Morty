import { DetailedHTMLProps, InputHTMLAttributes } from 'react'

import { clsx } from 'clsx'

import s from './cardBg.module.scss'

export const CardBg = ({ className, ...rest }: CardProps) => {
  return <div className={clsx(s.wrapper, className)} {...rest}></div>
}

interface CardProps
  extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {}
