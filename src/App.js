import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Skills from "./routes/Skills";
import Projects from "./routes/Projects";
import Project from "./routes/Project";
import Error from "./routes/Error";
import { useState } from "react";
// import Seed from "./Seed";

export default function App() {
  const [darkMode, setDarkMode] = useState(localStorage.getItem("darkMode") || false)

  localStorage.setItem("darkMode", darkMode)
  darkMode ? document.querySelector("html").classList.add("dark") : document.querySelector("html").classList.remove("dark")

  function changeTheme() {
    setDarkMode(prevDarkMode => !prevDarkMode)
    localStorage.setItem("darkMode", darkMode)
  }

  return (
    <div className="app--container">
      <Routes>
        <Route path="/" element={<Home darkMode={darkMode} changeTheme={changeTheme} />} />
        <Route path="skills" element={<Skills darkMode={darkMode} changeTheme={changeTheme} />} />
        <Route path="projects" element={<Projects darkMode={darkMode} changeTheme={changeTheme} />} />
        <Route path="projects/*" element={<Project darkMode={darkMode} changeTheme={changeTheme} />} />
        {/* <Route path="seed" element={<Seed />} /> */}
        <Route path="*" element={<Error darkMode={darkMode} changeTheme={changeTheme} />} />
      </Routes>
    </div>
  );
}