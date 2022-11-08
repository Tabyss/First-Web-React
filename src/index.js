import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './component/navbar';
import Main from './component/main';
import './assets/css/index.css';
import Project from './component/project';
import Footer from './component/footer';
import { slide } from '../src/assets/img/porto/index'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Main />
    <Project slides={slide}/>
    <Footer/>
  </React.StrictMode>
);
