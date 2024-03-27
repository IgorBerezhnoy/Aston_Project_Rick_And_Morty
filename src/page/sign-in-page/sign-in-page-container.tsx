import { useForm } from 'react-hook-form'
import { Navigate } from 'react-router-dom'

import { urlPaths } from '@/enums/enums'
import { login, selectAuth } from '@/features/auth/authSlice'
import { useAppDispatch, useAppSelector } from '@/hooks/use-appDispatch'
import { SignInPage } from '@/page/sign-in-page/sign-in-page'
import { SignInData, schemaSignInData } from '@/utils/validators/schemes'
import { zodResolver } from '@hookform/resolvers/zod'

export const SignInPageContainer = () => {
  const dispatch = useAppDispatch()
  const { isAuth } = useAppSelector(selectAuth)
  const { control, handleSubmit } = useForm<SignInData>({
    resolver: zodResolver(schemaSignInData),
  })

  const signInHandler = handleSubmit((data: SignInData) => {
    const { email, password } = data
    const user = localStorage.getItem(email)

    if (!user) {
      return null
    }
    const userObj = JSON.parse(user)

    if (userObj.email === email && userObj.password === password) {
      dispatch(login({ email }))
      localStorage.setItem('currentUser', JSON.stringify({ email, password }))
    }
  })

  if (isAuth) {
    return <Navigate to={urlPaths.root} />
  }

  return <SignInPage control={control} onSubmit={signInHandler} />
}
