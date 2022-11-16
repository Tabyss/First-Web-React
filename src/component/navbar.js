import React, { useState } from "react";
import { ReactComponent as Logo } from "../assets/img/logo.svg";
import { NavLink } from "react-router-dom";
import "../assets/css/navbar.css";

export default function Navbar() {
  const [click, setClick] = useState(false);

  const active = () => setClick(!click);

  return (
    <div className="nav">
      <nav className="nav__body">
        <NavLink to="/">
          <Logo height="35px" fill="white" />
        </NavLink>
        <div className="nav__menu">
          <div className="burger" onClick={active}>
            <button className={click ? "burger active" : "burger"}>
              <span></span>
              <span></span>
            </button>
          </div>
          <NavLink to="/about">bio</NavLink>
          <NavLink to="/skill">skills</NavLink>
          <NavLink to="#">contact</NavLink>
        </div>
      </nav>
    </div>
  );
}
