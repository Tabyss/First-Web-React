import "../assets/css/about.css";
import play from "../assets/img/play.svg";

function About() {
  return (
    <div className="about">
      <h1 className="about-value">about</h1>
      <div className="about-1">
        {/* <img src={profile}  className="profile"/> */}
        <div className="about-2">
          <p className="desc">about aku .....</p>
          <div className="about-3">
            <img src={play} className="icon-about" />
            <div className="about-4">
              <h4 className="pos-1">graphic designer</h4>
              <h4 className="pos-2">frontend development</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
