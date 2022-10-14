import "../assets/css/about.css";
import profile from "../assets/img/profile.png";


function About() {
  return (
    <div className="about">
        <h1 className="about-value">about</h1>
        <img src={ profile } />
        <div className="about-data">
          <p className="desc">about aku .....</p>
          <h4 className="class-1">graphic designer</h4>
          <h4 className="class-2">frontend development</h4>
        </div>
    </div>
  )
}

export default About;