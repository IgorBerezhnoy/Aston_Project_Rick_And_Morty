import { useEffect } from 'react'

import { User } from '@/features/auth/authSlice'

export const useDatabaseUpdate = (user: User | null) => {
  useEffect(() => {
    if (user === null) {
      return
    }
    const userDB = localStorage.getItem('currentUser')

    if (userDB === null) {
      return
    }
    const userDBData = JSON.parse(userDB)
    const userJson = JSON.stringify({ ...userDBData, ...user })

    localStorage.setItem('currentUser', userJson)
    localStorage.setItem(user.email, userJson)
  }, [user])
}
