import React from 'react'
import logo from '../Images/agent-logo.png'
import './Header.css'
import notification from '../Images/notification.png'
import profile from '../Images/profile.png'
import { useNavigate } from 'react-router-dom';


const Header = () => {
  const navigate = useNavigate()
  return (
    <div className='header-con'>
         <div className='logo-agent'>
            <img src={logo} alt='agentlogog'/>
         </div>
         <div className='agent-main'>
            <div className='notification'>
             <img src={notification} alt='notification'/>
            </div>
            <div className='profile'>
                <img src={profile} alt='profile'/>
            </div>
            <div className='agent-details' onClick={(()=>{navigate('/signup')})}>
                <h1>ADMIN NAME</h1>
                <p>ADMIN ID: 545943</p>
            </div>
            
         </div>

    </div>
  )
}

export default Header