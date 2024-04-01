import { useAppSelector } from '@/hooks/use-appDispatch'

import { History } from './history-page'

const HistoryContainer = () => {
  const history = useAppSelector(state => state.auth.user)

  return <History history={history?.stories ? history : null} />
}

export default HistoryContainer
