import logo from "./THABYS.png";
import "./assets/App.css";

export default function Navbar() {
  return (
    <nav className="nav-1">
      <img src={logo} height="30px" />
      <div className="menu">
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="#">Masuk</a>
      </div>
    </nav>
  );
}
