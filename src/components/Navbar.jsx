import React from "react";

export const Navbar = () => {
  return (
    <>
      <header>
        <div className="header container flex">
          <div className="flex logo">
            <div className="playfair-display">Sujan</div>
            <div className="line">Full-Stack Developer</div>
          </div>
          <label htmlFor="hamburger-menu">
            <i className="fa-solid fa-bars"></i>
          </label>
          <input type="checkbox" id="hamburger-menu" />
          <div className="menu">
            <ul className="flex navigation">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};
