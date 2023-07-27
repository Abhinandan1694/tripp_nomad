import './navbar.css'
import Box from '@mui/system'

import React from 'react'

const Navbar = () => {
    

  return (
    <>
    <nav className="navbar">
        <h1 className="navbar-brand">
            Trippy
        </h1>
        <ul className="navbar-menu">
            <li className="navbar-item">Home</li>
            <li className="navbar-item"></li>
            <li className="navbar-item"></li>
            <li className="navbar-item"></li>
        </ul>
    </nav>
    </>
  )
}

export default Navbar