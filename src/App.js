import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./component/navbar";
import Main from "./component/main";
import About from "./component/about";
import Skill from "./component/skill";

function App() {
  return (
    <>
      <Link />
      <Navbar />
    </>
  );
}

function Link() {
  return (
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="about" element={<About />}></Route>
      <Route path="skill" element={<Skill />}></Route>
    </Routes>
  );
}

export default App;
