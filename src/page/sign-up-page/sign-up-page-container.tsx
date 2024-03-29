import { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

import { urlPaths } from '@/enums'
import { selectAuth } from '@/features/auth/authSlice'
import { SignUpPage } from '@/page/sign-up-page/sign-up-page'
import { SignUpData, schemaSignUpData } from '@/utils/validators/schemes'
import { zodResolver } from '@hookform/resolvers/zod'

export const SignUpPageContainer = () => {
  const [isRegister, setIsRegister] = useState<boolean>(false)
  const { isAuth } = useSelector(selectAuth)

  const { control, handleSubmit } = useForm<SignUpData>({
    resolver: zodResolver(schemaSignUpData),
  })

  const signUpHandler = handleSubmit(
    useCallback((data: SignUpData) => {
      const { confirmPassword, email, password } = data

      if (password !== confirmPassword) {
        return // TODO Пока заглушка
      }
      localStorage.setItem(email, JSON.stringify({ email, favoriteIds: [], password }))
      setIsRegister(true)
    }, [])
  )

  if (isRegister) {
    return <Navigate to={urlPaths.signIn} />
  }
  if (isAuth) {
    return <Navigate to={urlPaths.root} />
  }

  return <SignUpPage control={control} onSubmit={signUpHandler} />
}
