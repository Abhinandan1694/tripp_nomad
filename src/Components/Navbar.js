import "./navbar.css";
import React from "react";
import {MenuItems} from './MenuItems'
import { padding } from "@mui/system";

const Navbar = () => {
  return (
    <React.Fragment>
      <nav className="navbar">
        <h1 className="navbar-brand">Trippy</h1>
        <ul className="navbar-menu">

          {MenuItems.map((item, index) => {
            return <li key={index} className={item.cName}>
                 <i className={item.icon}>
                <span className="icon-word">{item.title}</span></i>
            </li>
          })}

        </ul>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
