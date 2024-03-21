import { ChangeEvent, useState } from 'react'
import { Link } from 'react-router-dom'

import { Button } from '@/components/button'
import { CardBg } from '@/components/cardBg'
import { TextField } from '@/components/textField'

import s from './sign-up-page.module.scss'

export const SignUpPage = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [secondPassword, setSecondPassword] = useState<string>('')
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
    localStorage.setItem('user', JSON.stringify({ email, password }))
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
        <TextField
          label={'Confirm Password'}
          name={'Confirm Password'}
          onChange={onSecondChangePassword}
          placeholder={'Confirm Password'}
          type={'password'}
          value={secondPassword}
        />
        <Button onClick={signUpHandler}>Sign Up</Button>
      </form>
      <div className={s.footer}>
        <div className={s.text}>Already have an account?</div>
        <div className={s.signUp}>
          <Link to={'/sign-in'}>
            <span>Sign In</span>
          </Link>
        </div>
      </div>
    </CardBg>
  )
}
