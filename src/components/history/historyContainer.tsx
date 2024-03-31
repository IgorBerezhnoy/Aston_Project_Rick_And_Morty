import { useEffect, useState } from 'react'

import { History } from './history'

const HistoryContainer = () => {
  const [history, setHistory] = useState<null | string[]>(null)

  useEffect(() => {
    const currentUser = localStorage.getItem('currentUser')

    if (!currentUser) {
      return //нет пользователя
    }

    const currentUserObj = JSON.parse(currentUser)

    if (!currentUserObj?.history) {
      setHistory(null)

      return //пустая история
    }

    if (currentUserObj.history.length > 50) {
      currentUserObj.history = currentUserObj.history.reverse()
      currentUserObj.history.length = 50
      currentUserObj.history = currentUserObj.history.reverse()

      localStorage.removeItem('currentUser')
      localStorage.setItem('currentUser', JSON.stringify(currentUserObj))
    }

    setHistory(currentUserObj.history.reverse())
  }, [])

  if (!history) {
    return <History history={null} />
  }

  return <History history={history} />
}

export default HistoryContainer
