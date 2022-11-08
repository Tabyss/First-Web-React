import "../assets/css/project.css";
import React, { useRef, useState } from "react";
import { BiLeftArrow } from "react-icons/bi";
import { RiArrowRightSFill } from "react-icons/ri";

function Project({ slides }) {
  const [current, setcurrent] = useState(0);
  const length = slides.length;
  // const timeout = useRef(null);

  const next = () => {
    setcurrent(current === length - 1 ? 0 : current + 1);
  };

  const prev = () => {
    setcurrent(current === 0 ? length - 1 : current - 1);
  };

  const projectList = (
    <div className="prj__slide">
      <div className="prj__load">
        <p>All on progress...</p>
        <BiLeftArrow onClick={prev} />
        <RiArrowRightSFill onClick={next} />
      </div>
      {slides.map((slide, slides) => {
        return (
          <div className="prj__slide" key={slides}>
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
      <div className="prj__title">
        <h2>Project</h2>
      </div>
      {projectList}
    </div>
  );
}

export default Project;
