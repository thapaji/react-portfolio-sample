import { useState } from "react";
import "./App.css";
import { DarkModeToggler } from "./components/DarkModeToggler";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { AboutMe } from "./components/AboutMe";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { GoUpButton } from "./components/GoUpButton";
import { Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <DarkModeToggler />
      <div className="wrapper">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero/>} />
          {/* <Route path="/" element={Banner} /> */}
          <Route path="skills" element={<Skills/>} />
          <Route path="projects" element={<Projects/>} />
          <Route path="about" element={<AboutMe/>} />
          <Route path="contact" element={<Contact/>} />
        </Routes>
        <Footer />
        <GoUpButton />
      </div>
    </>
  );
}

export default App;
