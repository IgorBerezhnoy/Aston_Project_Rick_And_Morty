import { ChangeEvent, useCallback, useState } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

import { selectAuth } from '@/features/auth/authSlice'
import { SignUpPage } from '@/page/sign-up-page/sign-up-page'
import { urlPath } from '@/router'

export const SignUpPageContainer = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [secondPassword, setSecondPassword] = useState<string>('')
  const [isRegister, setIsRegister] = useState<boolean>(false)
  const { isAuth } = useSelector(selectAuth)

  const onChangeEmail = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setEmail(e.currentTarget.value)
    },
    [setEmail]
  )
  const onChangePassword = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setPassword(e.currentTarget.value)
    },
    [setPassword]
  )
  const onSecondChangePassword = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setSecondPassword(e.currentTarget.value)
    },
    [setSecondPassword]
  )
  const signUpHandler = useCallback(() => {
    if (password !== secondPassword) {
      return // TODO Пока заглушка
    }
    localStorage.setItem(email, JSON.stringify({ email, password }))
    setIsRegister(true)
  }, [email, password, secondPassword])

  if (isRegister) {
    return <Navigate to={urlPath.signIn} />
  }
  if (isAuth) {
    return <Navigate to={urlPath.root} />
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
