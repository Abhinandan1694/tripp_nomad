import "./navbar.css";
import SignUp from "./SignUp.js"
import React, { useState } from "react";
import { MenuItems } from './MenuItems'


console.log(MenuItems)

const Navbar = () => {

  const [navToggle, setNavToggle] = useState(true);

  const HandleNavToggle = () => {
    setNavToggle(!navToggle);
  }
  return (
    <React.Fragment>
      <nav className="navbar">
        <h1 className="navbar-brand">Trippy</h1>
        <div className="navbar-toggle" onClick={HandleNavToggle}>
          {navToggle ? <i className="fas fa-bars"></i> : <i className="fas fa-times"></i>}
        </div>
        <ul className={`navbar-menu ${navToggle ? "navbar-menu" : "navbar-menu active"}`}>
          {MenuItems.map((item, index) => {
            return <li key={index} className={item.cName}>
              <i className={item.icon}></i>
              <span className="icon-word">{item.title}</span>
            </li>
          })}
          <button className="signup-btn" onClick={() => { <SignUp /> }}>Sign Up</button>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
