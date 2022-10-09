import logo from "../assets/img/logo.svg";
import "../assets/css/navbar.css";
import React, { useState } from "react";

export default function Navbar() {

  const [click, setclick] = useState(false);

  const active = () => setclick(!click);

  return (
    <div className="nav">
      <nav className="nav-1">
        <img src={logo} height="50px" />
        <div className="menu">
          <a href="#">galleries</a>
          <a href="#">bio</a>
          <a href="#">skills</a>
          <a href="#">contact</a>
        </div>
        <div className="btn" onClick={active}>
        <button className={click ? "burger active" : "burger"}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        </div>
      </nav>
    </div>
  );
}
