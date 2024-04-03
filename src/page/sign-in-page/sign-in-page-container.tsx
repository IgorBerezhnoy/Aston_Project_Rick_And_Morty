import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { Navigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { urlPaths } from '@/enums/enums'
import { login, selectAuth } from '@/features/auth/authSlice'
import { useAppDispatch, useAppSelector } from '@/hooks/use-appDispatch'
import { SignInPage } from '@/page/sign-in-page/sign-in-page'
import { SignInData, schemaSignInData } from '@/utils/validators/schemes'
import { zodResolver } from '@hookform/resolvers/zod'

const SignInPageContainer = () => {
  const dispatch = useAppDispatch()
  const { isAuth } = useAppSelector(selectAuth)
  const { control, handleSubmit } = useForm<SignInData>({
    resolver: zodResolver(schemaSignInData),
  })

  const signInHandler = handleSubmit(
    useCallback((data: SignInData) => {
      const { email, password } = data
      const user = localStorage.getItem(email)

      if (!user) {
        toast.error('User not found')

        return
      }
      const userObj = JSON.parse(user)

      if (userObj.password === password) {
        const { favoriteIds, stories } = userObj

        dispatch(login({ email, favoriteIds, stories }))
        localStorage.setItem('currentUser', JSON.stringify({ ...userObj }))
        toast('🦄 Welcome', { position: 'top-center' })
      }
    }, [])
  )

  if (isAuth) {
    return <Navigate to={urlPaths.root} />
  }

  return <SignInPage control={control} onSubmit={signInHandler} />
}

export default SignInPageContainer
