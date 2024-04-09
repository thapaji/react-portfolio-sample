import React from "react";

export const Banner = () => {
  return (
    <>
      <section className="flex banner container">
        <div className="flex info-content">
          <div className="flex icon-container">
            <i className="fa-solid fa-award"></i>
          </div>
          <div>
            <span>IT</span>
            <p>Graduation</p>
          </div>
        </div>
        <div className="info-divider"></div>
        <div className="flex info-content">
          <div className="flex icon-container">
            <i className="fa-solid fa-award"></i>
          </div>

          <div>
            <span>5+</span>
            <p>Projects</p>
          </div>
        </div>
        <div className="info-divider"></div>
        <div className="flex info-content">
          <div className="flex icon-container">
            <i className="fa-solid fa-award"></i>
          </div>
          <div className="info-divider"></div>
          <div>
            <span>1+ Years</span>
            <p>Experience</p>
          </div>
        </div>
      </section>
    </>
  );
};
