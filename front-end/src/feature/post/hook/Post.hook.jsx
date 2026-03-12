import { getfeed, postCreation } from "../service/post.api.js"; // api import
import { useContext } from "react";
import { PostContext } from "../post.context.jsx";
import { useEffect } from "react";


export function usePost(){
    const context = useContext(PostContext);
    const {loading, setLoading, feed, setFeed,togglePostForm, setTogglePostForm} = context;
    
    //Feed handler 
    const handleFeed = async ()=>{
        setLoading(true);
        const data = await getfeed();
        setFeed(data);
        setLoading(false);



    }
    //Form toggle handler
    const handleToggleForm = ()=>{
        if(!togglePostForm)
        return setTogglePostForm(true)
        setTogglePostForm(false)


    }
    //postcreation
    const handlePostCreation = async (imageFile, caption ) =>{
        setLoading(true);
        const response = await postCreation(imageFile, caption)
        setLoading(false);
        return response


    }
   

    return(
        {loading, feed, handleFeed, handleToggleForm, togglePostForm, setTogglePostForm, handlePostCreation}
    )


}