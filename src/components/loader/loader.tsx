import { clsx } from 'clsx'

import s from './loader.module.scss'

export const Loader = ({ className }: { className?: string }) => {
  return <span className={clsx(s.loader, className)}></span>
}
