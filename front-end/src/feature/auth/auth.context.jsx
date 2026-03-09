// this is a 3 layer (state later) used to save or hold data or say context api
import {createContext, useState, useEffect} from 'react'; //using createContext for context api

export const AuthContext = createContext(); //create context name authContext

export function AuthProvider ({children}){

const [loading, setLoading] = useState(false) //using usestate to show loading while fecthing data like login or register
const [user, setUser] = useState(null)


return(
    <AuthContext.Provider value={{user, loading, setUser, setLoading}}>
        {children}

    </AuthContext.Provider>
)
}