import React, {useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { useNavigate } from 'react-router-dom' //use for navigation

const Register = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const {handleRegister, loading} = useAuth();
    const navigate = useNavigate(); //initialize useNavigate
    
    async function submitHandler(e){
        
        e.preventDefault();
        handleRegister(username, email, password) //calling the handleRegister function from auth.context.js
        .then(res=>{
            console.log(res)
            navigate('/') //after register navigate to login page
        })
        
       

    }
    if(loading)
    {
        return <div>Loading...</div>
    }
  return (
    <div className='form-container'>
        <form onSubmit={submitHandler}>
            <input 
            onInput={(e)=>{setUsername(e.target.value)}}
            type="text" 
            placeholder='username' 
            name='username' />
            <input 
            onInput={(e)=>{setEmail(e.target.value)}}
            type="text" 
            placeholder='email' 
            name='email' />
            <input 
            onInput={(e)=>{setPassword(e.target.value)}}
            type="text" 
            placeholder='password' 
            name='password' />
            <button type='submit'>Register</button> 
            <p>Already have an account?<Link to='/login'>Login</Link></p>
        </form>
    </div>
  )
}

export default Register