import React from "react";

export const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2 className="title">
        <span>Skills</span>
      </h2>
      <div className="container flex skills-container">
        <div>
          <i className="fa-brands fa-html5"></i>
          <span>HTML</span>
        </div>
        <div>
          <i className="fa-brands fa-css3-alt"></i>
          <span>CSS</span>
        </div>
        <div>
          <i className="fa-brands fa-js"></i>
          <span>Javascript</span>
        </div>
        <div>
          <i className="fa-brands fa-github"></i>
          <span>GitHub</span>
        </div>
        <div>
          <i className="fa-brands fa-figma"></i>
          <span>Figma</span>
        </div>
      </div>
    </section>
  );
};
