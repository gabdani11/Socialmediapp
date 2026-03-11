import { createContext, useState } from "react";

export const PostContext = createContext();



export function PostContextProvider({children}){
    const [loading, setLoading] = useState(false);
    const [feed, setFeed] = useState('')
    const [togglePostForm, setTogglePostForm] = useState(false)

    return(
    <PostContext.Provider value={{loading, setLoading, feed, setFeed, togglePostForm, setTogglePostForm}}>
        {children}
    </PostContext.Provider>
    )

}
