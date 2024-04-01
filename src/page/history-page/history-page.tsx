import { Link } from 'react-router-dom'

import { User } from '@/features/auth/authSlice'

import s from './history-page.module.scss'

import { randomEmoji } from './lib/randomEmoji'
type Props = {
  history: User | null
}

export const History = ({ history }: Props) => {
  if (!history || !history.stories.length) {
    return (
      <div className={s.titleContainer}>
        <h1 className={s.titleName}>History is empty</h1>
      </div>
    )
  }

  return (
    <div className={s.pageContainer}>
      <div className={s.titleContainer}>
        <h1 className={s.titleName}>Search history</h1>
      </div>
      <div className={s.historyContainer}>
        {history.stories.map((item, index) => (
          <div className={s.historyItem} key={index}>
            <Link className={s.historyItemLink} to={`/search/?page=1&name=${item.name}`}>
              {randomEmoji()}
              {item.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
