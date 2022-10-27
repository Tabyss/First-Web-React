import "../assets/css/main.css";
import { Link } from "react";

function App() {
  return (
    <div className="main">
      <div className="main__name">
        <span className="main__line"></span>
        <h1 className="main__first">shabbah</h1>
        <h2 className="main__last">athabiyyu</h2>
      </div>
      <div className="btn">
        <div className="btn__link">
          <button className="btn__main">
            <a href="/">Contact Me</a>
          </button>
          <span className="btn__line1"></span>
        </div>
        <span className="btn__line2"></span>
        <span className="line-4"></span>
      </div>
      <div className="loop">
        <span >

        </span>
      </div>
    </div>
  );
}

export default App;
