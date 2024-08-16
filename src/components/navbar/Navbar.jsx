import React, { useState } from 'react'
import './navbar.scss';
import { Link } from 'react-router-dom';

export const NavBar = () => {
  const user = true;
  const [open,setOpen]= useState(false)
 
  return (
   <nav>
    <div className="left">
    <a href="/" className='logo'>
      <img src="./logo.png" alt=""/>
      <span>Coding State</span>
    </a>
    <a href="/">Home</a>
    <a href="/">About</a>
    <a href="/">Contact</a>
    <a href="/">Agent</a>
    </div>
    
    <div className="right">
    {
      user ? (<div className='user'>
        <img src="/logo.png" alt="" />
        <span>John doe</span>
        <Link to="/user" className='profile'>
        <div className="notification">3</div>
        <span>Profile</span>
        </Link>
      </div>) :(<>
      <a href="/">SignIn</a>
      <a href="/" className='register'>SignUp</a>
    
      </>
   
      )
    }
      <div className="menuicon">
        <img src="/menu.png" alt="" onClick={()=> setOpen((prev)=>!prev)}/>
        </div>
        <div className={open ? " menu-active" : " menu-inactive " } >
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Agents</a>
          <a href="/">Sign in</a>
          <a href="/">Sign up</a>
          </div>
     
    </div>
   </nav>
  )
}
