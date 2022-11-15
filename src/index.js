import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/index.css";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import Footer from './component/footer';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <App />
      <Footer/>
    </Router>
  </React.StrictMode>
);
