import { DropdownWithUser } from '@/components/dropdownMenu/dropdownWithUser'
import { logout } from '@/features/auth/authSlice'
import { useAppDispatch } from '@/hooks/use-appDispatch'

type Props = { name: string }
export const DropdownWithUserContainer = ({ name }: Props) => {
  const dispatch = useAppDispatch()
  const logOutHandler = () => {
    localStorage.removeItem('currentUser')
    dispatch(logout())
  }

  return <DropdownWithUser logOutHandler={logOutHandler} name={name} />
}
