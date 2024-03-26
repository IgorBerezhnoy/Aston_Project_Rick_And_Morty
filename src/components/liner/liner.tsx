import { clsx } from 'clsx'

import s from './liner.module.scss'

export const Liner = ({ className }: { className?: string }) => {
  return <span className={clsx(s.loader, className)}></span>
}
