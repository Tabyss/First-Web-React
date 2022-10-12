import "../assets/css/about.css";
import profile from "../assets/img/profile.png";


function About() {
  return (
    <div className="about">
        <h1>about</h1>
        <img src={ profile } />
        <p className="about-data">about aku .....</p>
        <h4 className="class-1">graphic designer</h4>
        <h4 className="class-2">frontend development</h4>
    </div>
  )
}

export default About;