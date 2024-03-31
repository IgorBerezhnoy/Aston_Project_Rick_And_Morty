import { useNavigate } from 'react-router-dom'

import s from './history.module.scss'
type Props = {
  history: Array<string> | null
}

export const History = ({ history }: Props) => {
  const navigate = useNavigate()

  const randomEmodji = () => {
    const allowedEmoji = [...'😊🙃🤪🙂🤑🙁😞🥶🥵😈😂😂🤣😁😀🤓🤯😴💩👻👽🤖👾👐🖖✌️🤟🤘🤙👋🐭🦕🦖🐉']
    const index = Math.floor(Math.random() * allowedEmoji.length)
    const emodji = allowedEmoji[index]

    return emodji
  }

  if (!history) {
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
        {history.map((item, index) => (
          <div
            className={s.historyItem}
            key={index}
            onClick={() => {
              navigate(`/search/?page=1&name=${history[index]}`)
            }}
          >
            {randomEmodji()}
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}
