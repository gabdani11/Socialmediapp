// this is a 3 layer (state later) used to save or hold data or say context api
import {createContext, useState, useEffect} from 'react'; //using createContext for context api
import {login, register, getme} from './services/auth.api'

export const AuthContext = createContext(); //create context name authContext

export function AuthProvider ({children}){

const [loading, setLoading] = useState(false) //using usestate to show loading while fecthing data like login or register
const [user, setUser] = useState(null)
const handleLogin = async (username, password)=>{
    setLoading(true)
    try{
       const response = await login(username, password);  //function used to handlelogin by calling function login from auth.api.js
       setUser(response.user) //set to user
 
    }
    catch(error){
        console.log(error)
    }
    finally{
        setLoading(false) //finally when its done the loading set to false
    }
}
const handleRegister = async (username, email, password)=>
{
    setLoading(true)
    try{
        const response = await register(username, email, password)   //function used to handleregister by calling function login from auth.api.js
        setUser(response.user) //set to user
    }
    catch(error)
    {
       console.log(error)
    }
    finally{
        setLoading(false);
    }
}
return(
    <AuthContext.Provider value={{user, loading, handleLogin, handleRegister}}>
        {children}

    </AuthContext.Provider>
)
}