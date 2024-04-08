import { useSelector } from 'react-redux'

import { MainHeader } from '@/components/header/mainHeader'
import { selectApp } from '@/features/app/appSlice'

type Props = {
  isAuth: boolean
  name: string
}

export const MainHeaderContainer = ({ isAuth, name }: Props) => {
  const { isLoading } = useSelector(selectApp)

  return <MainHeader isAuth={isAuth} isLoading={isLoading} name={name} />
}
