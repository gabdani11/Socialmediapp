import React from 'react'
import { RiChat4Fill, RiNotification2Fill } from "@remixicon/react";
import './navbar.scss'
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router'
import { useAuth } from '../../auth/hooks/useAuth';

const Navbar = () => {
    const navigate = useNavigate();
    const {user} = useAuth();
    console.log(user, "this is user detail ")
  return (
    <header className='navbar'>
        <nav>
            <div className="left"><h1>We Connect</h1></div>
            <div className="right">
                <Link className='feedLink' to='/feed'>Feed</Link>
                <RiNotification2Fill />
                <RiChat4Fill />
                <img onClick={()=>navigate('/profile')} src={user.profileImage} alt="" />
            </div>
        </nav>
    </header>
  )
}

export default Navbar