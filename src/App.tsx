import { ToastContainer } from 'react-toastify'

import { AppRouter } from '@/router/router'

export function App() {
  return (
    <div>
      <ToastContainer
        autoClose={3000}
        closeOnClick
        draggable
        hideProgressBar={false}
        newestOnTop={false}
        pauseOnFocusLoss={false}
        pauseOnHover={false}
        position={'top-right'}
        rtl={false}
        theme={'light'}
      />
      <ToastContainer />
      <AppRouter />
    </div>
  )
}
