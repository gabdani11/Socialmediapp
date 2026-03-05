import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Register from './feature/auth/pages/register';
import Login from './feature/auth/pages/login';
const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<div>home</div>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoute