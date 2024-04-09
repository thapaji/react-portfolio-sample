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

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <DarkModeToggler />
      <div className="wrapper">
        <Navbar />
        <Hero />
        <Banner />
        <Skills />
        <Projects />
        <AboutMe />
        <Contact />
        <Footer />
        <GoUpButton />
      </div>
    </>
  );
}

export default App;
