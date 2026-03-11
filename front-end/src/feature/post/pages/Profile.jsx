import React from 'react'
import '../style/profile.scss'
import Navbar from '../../shared/components/Navbar'
import { RiAddLargeLine } from '@remixicon/react'
import Postupload from '../components/Postuploadform'
import { usePost } from '../hook/Post.hook'
const Profile = () => {
    const {togglePostForm, handleToggleForm} = usePost();
    function toggleForm(){
        handleToggleForm();


    }



  return (
    <>
    <Navbar/>
    <div className='profilePage'>
     <div className="container">
        <div className="profileUserDetail">
        <img src="https://t3.ftcdn.net/jpg/06/01/50/96/360_F_601509638_jDwIDvlnryPRhXPsBeW1nXv90pdlbykC.jpg" alt="" />
        <div className='profilename'>
            <h4>Username</h4>
        <h5>This is bio</h5>
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