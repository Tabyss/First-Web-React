import { ReactComponent as Barcode } from "../assets/img/barcode.svg";
import { ReactComponent as Plus } from "../assets/img/plus.svg";
import { Link } from "react";
import "../assets/css/main.css";

function App() {
  return (
    <div className="main">
      <Barcode className="barcode" fill="white" />
      <div className="main__body">
        <div className="main__ident">
          <div className="main__name">
            <h1 className="main__first">shabbah</h1>
            <h2 className="main__last">athabiyyu</h2>
          </div>
        </div>
        <div className="btn">
          <button className="btn__main">
            <a href="/">Contact Me</a>
          </button>
        </div>

      </div>
      <Plus className="plus" />
    </div>
  );
}

export default App;
