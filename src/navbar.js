import logo from "./assets/img/logo.svg";
import "./assets/css/App.css";

export default function Navbar() {
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
      </nav>
    </div>
  );
}
