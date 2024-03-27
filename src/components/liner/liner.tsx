import { clsx } from 'clsx'

import s from './liner.module.scss'

export const Liner = ({ className }: { className?: string }) => {
  return <div className={clsx(s.loader, className)}></div>
}
