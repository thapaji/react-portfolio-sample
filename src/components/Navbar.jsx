import React from "react";
import { Link } from "react-router-dom";

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
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="skills">Skills</Link>
              </li>
              <li>
                <Link to="projects">Projects</Link>
              </li>
              <li>
                <Link to="about">About</Link>
              </li>
              <li>
                <Link to="contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};
