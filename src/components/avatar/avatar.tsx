import { ReactNode } from 'react'

import { clsx } from 'clsx'

import s from './avatar.module.scss'

import { getFallBackName } from './lib'

type Props = {
  className?: string
  image?: ReactNode
  name: string
  size: number
}
export const Avatar = ({ className, image, name, size }: Props) => {
  const classNames = {
    image: s.image,
    root: clsx(s.root, className),
    userName: s.userName,
  }
  const fallbackUserName = getFallBackName(name)

  return (
    <div className={classNames.root} style={{ height: `${size}px`, width: `${size}px` }}>
      {!image && (
        <span className={classNames.userName} style={{ fontSize: `${10 + size / 8}px` }}>
          {fallbackUserName}
        </span>
      )}
      {image}
    </div>
  )
}
