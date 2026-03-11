import React from 'react'
import { RiCloseLine, RiFileAiFill } from '@remixicon/react'
import { usePost } from '../hook/Post.hook'


const Postupload = () => {
    const {togglePostForm, handleToggleForm} = usePost();
  return (
    <div className="postUpload" style={{display:togglePostForm?"flex":"none"}}>
                <form action="">
                    <div className="top">
                        <div className='heading' >
                        <RiCloseLine onClick={()=>handleToggleForm()} id='closeBtn' />
                        <h4>Create Post</h4>
                        </div>
                        <button>Share</button>
                    </div>
                    <div className="middle">
                        <div className="username">
                            <img src="https://payload317.cargocollective.com/1/0/31246/8658834/Brett-Walker--The-Quiet-Front.png" alt="" />
                            <h6>Alex johnson</h6>
                        </div>
                        <textarea name="caption" id="caption" placeholder="What's on your mind?"></textarea>
                        <div className="file">
                            <input type="file" name="file" id="file" />
                            <label htmlFor="file"><RiFileAiFill />Add Photos/Videos</label>
                        </div>
                    </div>
                </form>
            </div>
  )
}

export default Postupload