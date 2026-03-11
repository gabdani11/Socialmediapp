import React from 'react'
import { RiChat4Fill, RiNotification2Fill } from "@remixicon/react";
import './navbar.scss'
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router'

const Navbar = () => {
    const navigate = useNavigate();
  return (
    <header className='navbar'>
        <nav>
            <div className="left"><h1>We Connect</h1></div>
            <div className="right">
                <Link className='feedLink' to='/feed'>Feed</Link>
                <RiNotification2Fill />
                <RiChat4Fill />
                <img onClick={()=>navigate('/profile')} src="https://t3.ftcdn.net/jpg/06/01/50/96/360_F_601509638_jDwIDvlnryPRhXPsBeW1nXv90pdlbykC.jpg" alt="" />
            </div>
        </nav>
    </header>
  )
}

export default Navbar