import "../assets/css/project.css";
import porto from "../assets/img/porto/secta.png";
// import * as porto1 from "../assets/img/porto/index";
import React from 'react';

// let auto = document.getElementById('porto');
// let image = Array(porto1);

// setInterval(function(){
//   let qeue = Math.floor(Math.random()* 3);
//   auto.src = image[qeue];
// }, 1000);

function Project() {
  return (
    <div className="prj">
        <div className="prj__title">
            <h2>Project</h2>
        </div>
        <div className="prj__Slide">
          <div>
          <button>
            
          </button>
          </div>
          <img id="porto" src={ porto }/>
        </div>
    </div>
  )
}

export default Project