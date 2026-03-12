import React from 'react'
import { RiCloseLine, RiFileAiFill } from '@remixicon/react'
import { usePost } from '../hook/Post.hook'
import { useAuth } from '../../auth/hooks/useAuth'
import {useState, useRef, useEffect} from 'react'//use ref is similar to usestate but does not re-render components



const Postupload = () => {
    const {togglePostForm,setTogglePostForm, handleToggleForm, handlePostCreation,loading} = usePost();
    const [caption, setCaption] = useState('')
    const [preview, setPreview] = useState(null)
    const {user} = useAuth();
    const postImageInputFieldRef = useRef(null) //creating useref and the current value is null
    async function handlePostSubmit(e){
        console.log("clicked")
        e.preventDefault()
        const imageFile = postImageInputFieldRef.current.files[0] //get the selected file from useref
        const response = await handlePostCreation(imageFile, caption)
        console.log(response)
        setTogglePostForm(false);
        

    }
    function handleFileChange(e) {
    const file = e.target.files[0]
    if(file) {
        setPreview(URL.createObjectURL(file))  // creates a temporary URL
    }
}
    if(loading){
        return<div>Loading</div>
    }
    useEffect(() => {
    if (!togglePostForm) {
        setCaption('')
        setPreview(null); //set the preview to null when close the postCreation 
        if (postImageInputFieldRef.current) {
            postImageInputFieldRef.current.value = "";//set the ref value also null
        }
    }
}, [togglePostForm]);

    
  return (
    <div className="postUpload" style={{display:togglePostForm?"flex":"none"}}>
                <form onSubmit={(e)=>{handlePostSubmit(e)}}>
                    <div className="top">
                        <div className='heading' >
                        <RiCloseLine onClick={()=>handleToggleForm()} id='closeBtn' />
                        <h4>Create Post</h4>
                        </div>
                        <button type='submit'>Share</button>
                    </div>
                    <div className="middle">
                        <div className="username">
                            <img src="https://payload317.cargocollective.com/1/0/31246/8658834/Brett-Walker--The-Quiet-Front.png" alt="" />
                            <h6>{user.username}</h6>    
                        </div>
                        <textarea
                         value={caption}
                         onChange={(e)=>setCaption(e.target.value)}
                         name="caption" 
                         id="caption" 
                         placeholder="What's on your mind?"></textarea>
                        <div className="file">
                            <input
                             type="file"
                             onChange={(e)=>handleFileChange(e)}
                            
                             ref={postImageInputFieldRef} //uploading to use ref // attach it to an element
                             name="file" 
                             id="file" />
                            <label htmlFor="file"><RiFileAiFill />
                            {preview && <img src={preview} alt="preview"/>}
                            Add Photos/Videos</label>
                        </div>
                    </div>
                </form>
            </div>
  )
}

export default Postupload