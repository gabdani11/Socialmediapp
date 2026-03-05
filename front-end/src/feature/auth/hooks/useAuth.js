//this is a hooks layer that will let used the context api with ui components
import { useContext } from "react";
import { AuthContext } from "../auth.context.jsx";



export function useAuth(){  //exporting so this can be used anywhere
    const context = useContext(AuthContext)
    return context



}