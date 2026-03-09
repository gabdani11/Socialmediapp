import React from 'react'
import { RiHeartLine, RiChat4Line, RiSendInsLine } from "@remixicon/react"; //icons import

const Post = ({post}) => {
    console.log(post)
  return (
    
        <div className="post">
            <div className="top">
                <img src={post.userId.profile} alt="" />
                <h5>{post.userId.username}</h5>
            </div>
            <div className="middle">
                <img src={post.imageUrl} alt="" />
            </div>
            <div className="bottom">
                <div className='icons'>
                <RiHeartLine />
                <RiChat4Line />
                <RiSendInsLine />
                </div>
                <div className='caption'>
                <h5>{post.userId.username}</h5>
                <h6>{post.caption}</h6>
                </div>
            </div>
        </div>
    
  )
}

export default Post