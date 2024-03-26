import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

import { urlPaths } from '@/enum'
import { selectAuth } from '@/features/auth/authSlice'
import { SignUpPage } from '@/page/sign-up-page/sign-up-page'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const schema = z
  .object({
    confirmPassword: z.string().min(3),
    email: z.string().email('Invalid email address'),
    password: z.string().min(3),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  })

export type SignUpData = z.infer<typeof schema>

export const SignUpPageContainer = () => {
  const [isRegister, setIsRegister] = useState<boolean>(false)
  const { isAuth } = useSelector(selectAuth)

  const { control, handleSubmit } = useForm<SignUpData>({
    resolver: zodResolver(schema),
  })

  const signUpHandler = handleSubmit((data: SignUpData) => {
    const { confirmPassword, email, password } = data

    if (password !== confirmPassword) {
      return // TODO Пока заглушка
    }
    localStorage.setItem(email, JSON.stringify({ email, password }))
    setIsRegister(true)
  })

  if (isRegister) {
    return <Navigate to={urlPaths.signIn} />
  }
  if (isAuth) {
    return <Navigate to={urlPaths.root} />
  }

  return <SignUpPage control={control} onSubmit={signUpHandler} />
}
