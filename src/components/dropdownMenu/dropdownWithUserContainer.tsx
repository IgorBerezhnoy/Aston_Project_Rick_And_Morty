import { useNavigate } from 'react-router-dom'

import { DropdownWithUser } from '@/components/dropdownMenu/dropdownWithUser'
import { urlPaths } from '@/enums'
import { logout } from '@/features/auth/authSlice'
import { useAppDispatch } from '@/hooks/use-appDispatch'

type Props = { name: string }
export const DropdownWithUserContainer = ({ name }: Props) => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const logOutHandler = () => {
    localStorage.removeItem('currentUser')
    dispatch(logout())

    return navigate(urlPaths.root)
  }

  return <DropdownWithUser logOutHandler={logOutHandler} name={name} />
}
