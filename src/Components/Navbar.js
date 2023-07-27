import './navbar.css'
import React from 'react'


const Navbar = () => {


  return (
    <React.Fragment>
      <nav className="navbar">
        <h1 className="navbar-brand">
          Trippy
        </h1>
        <ul className="navbar-menu">
          <li className="navbar-item">
           <i className="fa-duotone fa-house-user fa-2xs"></i>Home
          </li>
        </ul>
      </nav>
    </React.Fragment>
  )
}

export default Navbar;