import { Link } from 'react-router-dom'

import { Button } from '@/components/button'
import { Card } from '@/components/card'
import { TextField } from '@/components/textField'

import s from './sign-in-page.module.scss'

export const SignInPage = () => {
  return (
    <Card className={s.container}>
      <h2 className={s.title}>Sign in</h2>
      <form className={s.form}>
        <TextField label={'Email'} name={'email'} placeholder={'email'} />
        <TextField
          label={'Password'}
          name={'password'}
          placeholder={'password'}
          type={'password'}
        />
        <Button>Sign In</Button>
      </form>
      <div className={s.footer}>
        <div className={s.text}>{"Don't have an account?"}</div>
        <div className={s.signUp}>
          <Link to={'/sign-up'}>
            <span>Sign Up</span>
          </Link>
        </div>
      </div>
    </Card>
  )
}
