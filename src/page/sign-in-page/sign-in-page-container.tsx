import { ChangeEvent, MouseEvent, useCallback, useState } from 'react'
import { Navigate } from 'react-router-dom'

import { urlPaths } from '@/enum/urlPaths'
import { login, selectAuth } from '@/features/auth/authSlice'
import { useAppDispatch, useAppSelector } from '@/hooks/use-appDispatch'
import { SignInPage } from '@/page/sign-in-page/sign-in-page'

export const SignInPageContainer = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const dispatch = useAppDispatch()
  const { isAuth } = useAppSelector(selectAuth)

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
  const signInHandler = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
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
    },
    [email, password, dispatch]
  )

  if (isAuth) {
    return <Navigate to={urlPaths.root} />
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
