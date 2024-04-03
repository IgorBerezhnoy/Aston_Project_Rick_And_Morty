import { Link } from 'react-router-dom'

import { CardPage } from '@/components/cardPage'
import { User } from '@/features/auth/authSlice'

import s from './history-page.module.scss'

import { randomEmoji } from '../../utils/randomEmoji'

type Props = {
  history: User | null
}

export const History = ({ history }: Props) => {
  return (
    <div className={s.pageContainer}>
      <div className={s.titleContainer}>
        <h1 className={s.titleName}>Search history</h1>
      </div>
      {history?.stories.length ? (
        <ul className={s.historyContainer}>
          {history.stories.map((item, index) => (
            <li className={s.historyItem} key={index}>
              <Link className={s.historyItemLink} to={`/search/?page=1&name=${item.name}`}>
                {randomEmoji()}
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <CardPage title={"Sorry you don't have any history"} />
      )}
    </div>
  )
}
