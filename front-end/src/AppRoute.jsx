import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Register from './feature/auth/pages/register';
import Login from './feature/auth/pages/login';
import Feed from './feature/post/pages/feed';
import Profile from './feature/post/pages/Profile';
const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<div>home</div>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/feed' element = {<Feed/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoute