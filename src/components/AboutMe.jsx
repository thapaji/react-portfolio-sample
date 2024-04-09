import React from "react";
import photo from "../assets/cropped_img.png";

export const AboutMe = () => {
  return (
    <section id="about">
      <h2 className="title">
        <span>About Me</span>
      </h2>
      <div className="about flex container">
        <div className="sec-pic">
          <img src={photo} alt="" width="100%" />
        </div>
        <p>
          Hello there, this is <span>Sujan Bikram Thapa</span>,<span>MERN STACK Developer</span>.
          I'm a results-driven Software Developer based in Sydney, Australia, with a passion for
          crafting robust solutions and embracing cutting-edge technologies. With a Master's degree
          in Applied Information Technology and hands-on experience in Java, .NET, JavaScript, and
          more, I thrive in dynamic environments where innovation meets practicality. From
          optimizing software performance to spearheading migration projects and contributing to
          enterprise-level applications, I bring a versatile skill set honed through years of
          dedication and continuous learning. Explore my portfolio to discover how I tackle
          challenges and deliver impactful solutions in the ever-evolving landscape of software
          development.
        </p>
      </div>
    </section>
  );
};
