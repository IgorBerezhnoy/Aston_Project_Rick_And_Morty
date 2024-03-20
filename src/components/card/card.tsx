import { DetailedHTMLProps, InputHTMLAttributes } from 'react'

import { clsx } from 'clsx'

import s from './card.module.scss'

export const Card = ({ className, ...rest }: CardProps) => {
  return <div className={clsx(s.wrapper, className)} {...rest}></div>
}

interface CardProps
  extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {}
