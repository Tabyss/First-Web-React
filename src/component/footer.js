import "../assets/css/footer.css";
import logo from "../assets/img/logo.svg";
import React from 'react';

function Footer() {
  return (
    <div className="foot">
        <div className="foot__copy">
            <div className="foot__logo">
                <img src={ logo } />
                <h1>thabys</h1>
            </div>
            <p>copyright by thabys</p>
        </div>
        <div>
            <div>
                <h3>Contact Me</h3>
                <a>shabbahatha86@gmail.com</a>
            </div>
            <div>
                <h3>Social</h3>
                <a>Instagram</a>
                <a>Behance</a>
                <a>Twitter</a>
                <a>LinkIn</a>
            </div>
        </div>
    </div>
  )
}

export default Footer