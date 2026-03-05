import React from 'react'
import './style.scss'
import AppRoute from './AppRoute'
import { AuthProvider } from './feature/auth/auth.context'

const App = () => {
  return (
    <AuthProvider>
      <AppRoute/>

    </AuthProvider>
    
  )
}

export default App