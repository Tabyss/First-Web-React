import React, { useState } from "react";
import { ReactComponent as Logo } from '../assets/img/logo.svg';
import "../assets/css/navbar.css";

export default function Navbar() {
  const [click, setclick] = useState(false);

  const active = () => setclick(!click);

  return (
    <div className="nav">
      <nav className="nav__body">
        <Logo height="35px" />
        <div className="nav__menu">
          <div className="burger" onClick={active}>
            <button className={click ? "burger active" : "burger"}>
              <span></span>
              <span></span>
            </button>
          </div>
          <a href="#">galleries</a>
          <a href="#">bio</a>
          <a href="#">skills</a>
          <a href="#">contact</a>
        </div>
      </nav>
    </div>
  );
}
