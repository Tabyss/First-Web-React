import porto from "../assets/img/porto/secta.png";
import "../assets/css/project.css";
import React from "react";

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
      <div className="prj__slide">
        <div>
          <img className="porto1" src={porto} />
          <div className="prj__load">
            <p>All on progress...</p>
            <div>
              <></>
            </div>
          </div>
        </div>
        <img className="porto2" src={porto} />
      </div>
    </div>
  );
}

export default Project;
