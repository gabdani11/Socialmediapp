//this is a hooks layer that will let used the context api with ui components
import { useContext } from "react";
import { AuthContext } from "../auth.context.jsx";
import {login, register, getme} from '../services/auth.api.jsx'




export function useAuth(){  //exporting so this can be used anywhere
    const context = useContext(AuthContext)
    const {user, setUser, loading, setLoading} = context; //destructure the context

  const handleLogin = async(username, password)=>{
    setLoading(true);
    const response = await login(username, password); //calling api.js function 
    setUser(response.user)//set in context/state layer
    setLoading(false)//set state layer
    


  }
  const handleRegister = async (username, password, email)=>{
    setLoading(true);
    const response = await register(username, password,email);// calling api.js function 
    setUser(response.user) //set in context/state layer
    setLoading(false)//set state layer
    


  }

  return (
    {user, loading, handleLogin, handleRegister} //sending to ux layer 
  )


}