import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Projects from "./routes/Projects";
import Project from "./routes/Project";
import Error from "./routes/Error";
import { useState } from "react";
import Seed from "./seed";

export default function App() {
  const [darkMode, setDarkMode] = useState(localStorage.getItem("darkMode") || false)

  localStorage.setItem("darkMode", darkMode)
  darkMode ? document.querySelector("html").classList.add("dark") : document.querySelector("html").classList.remove("dark")

  function changeTheme() {
    setDarkMode(prevDarkMode => !prevDarkMode)
    localStorage.setItem("darkMode", darkMode)
  }

  return (
    <>
      <Routes>
        <Route className="container--home" path="/" element={<Home darkMode={darkMode} changeTheme={changeTheme} />} />
        <Route className="container--projects" path="projects" element={<Projects darkMode={darkMode} changeTheme={changeTheme} />} />
        <Route className="container--project" path="projects/*" element={<Project darkMode={darkMode} changeTheme={changeTheme} />} />
        <Route path="seed" element={<Seed />} />
        <Route className="container--error" path="*" element={<Error darkMode={darkMode} changeTheme={changeTheme} />} />
      </Routes>
    </>
  );
}