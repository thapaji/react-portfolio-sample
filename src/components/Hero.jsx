import React from "react";

export const Hero = () => {
  return (
    <>
      <section className="hero-section container" id="home">
        <div className="grid hero">
          <div className="left flex">
            <div>
              Hey there! I am <span>Sujan Bikram Thapa</span>,
            </div>
            <div className="tag">Full Stack Developer</div>
            <span>based in Sydney.</span>
            <div>
              <a href="./assets/Sujan_Bikram_Thapa_-_Full_Stack_Developer.pdf" download>
                <button>
                  Download CV <i className="fa-solid fa-download"></i>
                </button>
              </a>
            </div>
          </div>
          <div className="right flex">
            <img src="./assets/profile-picture.png" alt="" width="100%" />
          </div>
        </div>
      </section>
    </>
  );
};
