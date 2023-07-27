import "./navbar.css";
import React from "react";
import {MenuItems} from './MenuItems'


const Navbar = () => {
  return (
    <React.Fragment>
      <nav className="navbar">
        <h1 className="navbar-brand">Trippy</h1>
        <ul className="navbar-menu">

          {MenuItems.map((item, index) => {
            return <li key={index} className={item.cName}>
                 <i className={item.icon}></i>
                 <span className="icon-word">{item.title}</span>
            </li>
          })}

        </ul>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
