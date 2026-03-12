import React, {useEffect, useState} from 'react'
import { Link } from 'react-router'
import '../style/login.scss'
import axios from 'axios'
import { useAuth } from '../hooks/useAuth' //calling the hook useAuth.js
import { useNavigate } from 'react-router-dom' //use for navigation


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('')
  const {handleLogin, loading, user, handleGetMeUserDetail} = useAuth();
  const navigate = useNavigate(); //initialize useNavigate

  async function submitHandler(e){
    
    e.preventDefault();
    await handleLogin(username, password)//calling the handleLogin function from auth.context.js
    await handleGetMeUserDetail()
    .then(res=>{
      console.log(res)
      navigate('/feed') //after login navigate to home page 
 })
    useEffect(()=>{
      handleGetMeUserDetail()

    },[])

    

  }
  if(loading)
    {
        return <div>Loading...</div>
    }
  return (
    <div className='login form-container'>
        <form onSubmit={submitHandler}>
            <input 
            onInput={(e)=>{setUsername(e.target.value)}}
            type="text" 
            name='username' 
            placeholder='username' />
            <input 
            onInput={(e)=>{setPassword(e.target.value)}}
            type="text" 
            name='password' 
            placeholder='password' />
            <button type='submit'>Login</button>
            <p>Don't have an account <Link className='registerBtn' to="/register">Register</Link> </p>
        </form>
    </div>
  )
}

export default Login