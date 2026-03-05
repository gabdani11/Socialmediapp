// This is the 4 layer an (api layer) that is used to communicate with backend and get data.
import axios from 'axios'

const api = axios.create({
    baseURL:"http://localhost:3000/api/auth",   //use to reduce duplicate code or similar code used in both login and register api
    withCredentials: true,//“Include credentials (cookies, authorization headers, TLS client certificates) when making this request 
           //for getting token from backend


})
//register api call
export async function register(username, email, password){ //call register api
    try{
    const response = await api.post('/register',{ //calling api http://localhost:3000/api/auth/register
            username,
            password,
            email
        })
        return response 
    }
    catch(error){
            throw error
        } 
        
}
//login api call
export async function login(username, password){ //call login api
    try{
    const response = await api.post('/login',{  //calling api http://localhost:3000/api/auth/login
        username,
        password
    }) 
    return response
    }
    catch(error){
        throw error
    }
}  
//getme api call
export async function getme(){
    try{
        const response = await api.get('/get-me')
        return response
    }catch(error){
        throw error
    }
} 