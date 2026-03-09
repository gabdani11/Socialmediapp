import React from 'react'
import './style.scss'
import AppRoute from './AppRoute'
import { AuthProvider } from './feature/auth/auth.context'
import { PostContextProvider } from './feature/post/post.context'

const App = () => {
  return (
    <AuthProvider>
      <PostContextProvider>
        <AppRoute/>

      </PostContextProvider>
      

    </AuthProvider>
    
  )
}

export default App