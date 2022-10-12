import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './component/navbar';
import Main from './component/main';
import About from './component/about';
import './assets/css/index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Main />
    <About />
  </React.StrictMode>
);
