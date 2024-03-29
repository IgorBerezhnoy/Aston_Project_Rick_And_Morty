import { useEffect } from 'react'

export const useDatabaseUpdate = (favoriteIds: null | number[]) => {
  useEffect(() => {
    if (favoriteIds === null) {
      return
    }
    const user = localStorage.getItem('currentUser')

    if (!user) {
      return
    }
    const dataUser = JSON.parse(user)

    localStorage.setItem('currentUser', JSON.stringify({ ...dataUser, favoriteIds }))
    localStorage.setItem(dataUser.email, JSON.stringify({ ...dataUser, favoriteIds }))
  }, [favoriteIds])
}
