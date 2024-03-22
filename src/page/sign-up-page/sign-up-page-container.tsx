import { ChangeEvent, useState } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

import { selectAuth } from '@/features/auth/authSlice'
import { SignUpPage } from '@/page/sign-up-page/sign-up-page'

export const SignUpPageContainer = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [secondPassword, setSecondPassword] = useState<string>('')
  const [isRegister, setIsRegister] = useState<boolean>(false)
  const { isAuth } = useSelector(selectAuth)

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value)
  }
  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value)
  }
  const onSecondChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setSecondPassword(e.currentTarget.value)
  }
  const signUpHandler = () => {
    if (password !== secondPassword) {
      return // TODO Пока заглушка
    }
    localStorage.setItem(email, JSON.stringify({ email, password }))
    setIsRegister(true)
  }

  if (isRegister) {
    return <Navigate to={'/sign-in'} />
  }
  if (isAuth) {
    return <Navigate to={'/'} />
  }

  return (
    <SignUpPage
      email={email}
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      onSecondChangePassword={onSecondChangePassword}
      password={password}
      secondPassword={secondPassword}
      signUpHandler={signUpHandler}
    />
  )
}
