import { useEffect, useState } from 'react'

import { useAppSelector } from '@/hooks/use-appDispatch'

import { History } from './history'

const HistoryContainer = () => {
  const [history, setHistory] = useState(useAppSelector(state => state.auth.user))

  console.log(history)

  if (!history?.stories) {
    return <History history={null} />
  }

  return <History history={history} />
}

export default HistoryContainer
