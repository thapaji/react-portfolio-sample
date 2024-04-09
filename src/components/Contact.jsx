import React from "react";

export const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2 className="title">
        <span>Contact Me</span>
      </h2>
      <div className="flex contact-container banner">
        <span>mail.thapasujan@gmail.com</span>
        <button>
          <a href="mailto:mail.thapasujan@gmail.com">
            <i className="fa-solid fa-paper-plane"></i>
          </a>
        </button>
      </div>
    </section>
  );
};
