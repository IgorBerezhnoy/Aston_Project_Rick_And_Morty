import { useEffect } from 'react'

export const useDatabaseUpdate = (favoriteIds: number[]) => {
  useEffect(() => {
    const dataUser = JSON.parse(localStorage.getItem('currentUser') || '')

    if (!dataUser) {
      return
      //Прокинуть ошибку
    }

    const newDataUser = JSON.stringify({ ...dataUser, favoriteIds })

    localStorage.setItem('currentUser', newDataUser)
    localStorage.setItem(dataUser.email, newDataUser)
  }, [favoriteIds])
}
