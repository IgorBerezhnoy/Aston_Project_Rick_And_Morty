import { selectAuth } from '@/features/auth/authSlice'
import { useAppSelector } from '@/hooks/use-appDispatch'

import { History } from './history-page'

const HistoryContainer = () => {
  const history = useAppSelector(selectAuth).user

  return <History history={history?.stories ? history : null} />
}

export default HistoryContainer
