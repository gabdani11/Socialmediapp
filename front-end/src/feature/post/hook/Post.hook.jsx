import { getfeed } from "../service/post.api.js"; // api import
import { useContext } from "react";
import { PostContext } from "../post.context.jsx";
import { useEffect } from "react";


export function usePost(){
    const context = useContext(PostContext);
    const {loading, setLoading, feed, setFeed} = context;

    const handleFeed = async ()=>{
        setLoading(true);
        const data = await getfeed();
        setFeed(data);
        setLoading(false);



    }
   

    return(
        {loading, feed, handleFeed}
    )


}