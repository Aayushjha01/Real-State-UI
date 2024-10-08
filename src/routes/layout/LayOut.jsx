import React from 'react'
import './layout.scss';
import { NavBar } from '../../components/navbar/Navbar';
import { Outlet } from 'react-router-dom';



const LayOut = () => {
  return (
    <div className="layout">
      <div className="navbar"> <NavBar/></div>
       <div className="content">
         <Outlet/>
       </div>
     
     </div>
  )
}

export default LayOut