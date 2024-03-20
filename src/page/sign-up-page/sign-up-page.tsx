import { Link } from 'react-router-dom'

import { Button } from '@/components/button'
import { Card } from '@/components/card'
import { TextField } from '@/components/textField'

import s from './sign-up-page.module.scss'

export const SignUpPage = () => {
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
        />{' '}
        <TextField
          label={'Confirm Password'}
          name={'Confirm Password'}
          placeholder={'Confirm Password'}
          type={'password'}
        />
        <Button>Sign Up</Button>
      </form>
      <div className={s.footer}>
        <div className={s.text}>Already have an account?</div>
        <div className={s.signUp}>
          <Link to={'/sing-in'}>
            <span>Sign In</span>
          </Link>
        </div>
      </div>
    </Card>
  )
}
