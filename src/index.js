import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './navbar.js'
import Main from './main';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Main />
  </React.StrictMode>
);
