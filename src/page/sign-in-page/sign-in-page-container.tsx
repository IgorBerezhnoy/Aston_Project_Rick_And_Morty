import { ChangeEvent, MouseEvent, useState } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

import { login, selectAuth } from '@/features/auth/authSlice'
import { useAppDispatch } from '@/hooks/useAppDispatch'
import { SignInPage } from '@/page/sign-in-page/sign-in-page'

export const SignInPageContainer = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const dispatch = useAppDispatch()
  const { isAuth } = useSelector(selectAuth)

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value)
  }
  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value)
  }
  const signInHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const user = localStorage.getItem(email)

    if (!user) {
      return null
    }
    const userObj = JSON.parse(user)

    if (userObj.email === email && userObj.password === password) {
      dispatch(login({ email }))
      localStorage.setItem('currentUser', JSON.stringify({ email, password }))
    }
  }

  if (isAuth) {
    return <Navigate to={'/'} />
  }

  return (
    <SignInPage
      email={email}
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      password={password}
      signInHandler={signInHandler}
    />
  )
}
