import React from 'react'
import '../style/profile.scss'
import Navbar from '../../shared/components/Navbar'
import { RiAddLargeLine } from '@remixicon/react'
import Postupload from '../components/Postuploadform'
import { usePost } from '../hook/Post.hook'
import { useAuth } from '../../auth/hooks/useAuth'
const Profile = () => {
    const {togglePostForm, handleToggleForm} = usePost();
    const {user} = useAuth()
    console.log(user)
    function toggleForm(){
        handleToggleForm();


    }



  return (
    <>
    <Navbar/>
    <div className='profilePage'>
     <div className="container">
        <div className="profileUserDetail">
        <img src={user.profileImage} alt="" />
        <div className='profilename'>
            <h4>{user.username}</h4>
        <h5>{user.bio}</h5>
        </div>
        

        </div>
        <div className="profilePostDetail">
            <div className="postCreation" onClick={()=>toggleForm()}>
                <RiAddLargeLine />
                <span>CreatePost</span>
            </div>
            

        </div>
     </div>
     <Postupload/>
    </div>
    </>
  )
}

export default Profile