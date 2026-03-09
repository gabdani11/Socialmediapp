import React from 'react'
import '../style/post.scss'

import { usePost } from '../hook/Post.hook.jsx';
import { useEffect } from 'react';
import Post from '../components/post.jsx';


const Feed = () => {
    const {loading, feed, handleFeed} = usePost();

    useEffect(()=>{
        handleFeed();

    },[])
     if(loading || !feed){
        return (<main><h1>Feed is loading...</h1></main>)
    }
    const post = feed.posts
    console.log(post)
   
  return (
    <div className='post-container'>
        {
            post.map((post)=>{
              return <Post post={post}/>
            })
        }
        
       
       
        

    </div>
  )
}

export default Feed;