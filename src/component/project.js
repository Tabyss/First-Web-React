import "../assets/css/project.css";
import React, { useRef, useState } from "react";
import { BiLeftArrow } from "react-icons/bi";
import { RiArrowRightSFill } from "react-icons/ri";

function Project({ slides }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  // const timeout = useRef(null);

  const next = (next) => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prev = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  // setInterval(next, 8000);

  const skillList = (
    <div className="sk">
      <div className="sk__item">
        <div className="sk__list1">
          <span >frontend development</span>
        </div>
        <div className="sk__list1">
          <span >designer graphic</span>
        </div>
        <h5>and still counting...</h5>
      </div>
    </div>
  );

  const projectList = (
    <div className="pl__slide">
      <div className="pl__load">
        <p>All on progress...</p>
        <BiLeftArrow onClick={prev} />
        <RiArrowRightSFill onClick={next} />
      </div>
      {slides.map((slide, slides) => {
        return (
          <div className="pl__slide" key={slides}>
            {slides === current && (
              <div>
                <h1>{slide.title}</h1>
                <img className="porto2" src={slide.image} alt={slide.alt} />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );

  return (
    <div className="prj">
      <div className="prj__main">
        {skillList}
      </div>
      <div className="prj__title">
        <h2>Project</h2>
      </div>
      {projectList}
    </div>
  );
}

export default Project;
