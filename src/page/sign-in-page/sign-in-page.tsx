import { ChangeEvent, MouseEvent, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, Navigate } from 'react-router-dom'

import { Button } from '@/components/button'
import { CardBg } from '@/components/cardBg'
import { TextField } from '@/components/textField'
import { login, selectAuth } from '@/features/auth/authSlice'
import { useAppDispatch } from '@/hooks/useAppDispatch'

import s from './sign-in-page.module.scss'

export const SignInPage = () => {
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
    <CardBg className={s.container}>
      <h2 className={s.title}>Sign in</h2>
      <form className={s.form}>
        <TextField
          label={'Email'}
          name={'email'}
          onChange={onChangeEmail}
          placeholder={'email'}
          value={email}
        />
        <TextField
          label={'Password'}
          name={'password'}
          onChange={onChangePassword}
          placeholder={'password'}
          type={'password'}
          value={password}
        />
        <Button onClick={e => signInHandler(e)}>Sign In</Button>
      </form>
      <div className={s.footer}>
        <div className={s.text}>{"Don't have an account?"}</div>
        <div className={s.signUp}>
          <Link to={'/sign-up'}>
            <span>Sign Up</span>
          </Link>
        </div>
      </div>
    </CardBg>
  )
}
