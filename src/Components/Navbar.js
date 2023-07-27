import './navbar.css'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {


  return (
    <>
      <nav className="navbar">
        <h1 className="navbar-brand">
          Trippy
        </h1>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link><i class="fa-duotone fa-house-user fa-2xs"></i>Home</Link>
          </li>
          <li className="navbar-item"></li>
          <li className="navbar-item"></li>
          <li className="navbar-item"></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar;