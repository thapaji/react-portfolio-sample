import React from "react";

export const DarkModeToggler = () => {
  return (
    <>
      <label htmlFor="darkMode" id="darkmode-toggler">
        <i className="fa-solid fa-circle-half-stroke"></i>
      </label>
      <input type="checkbox" id="darkMode" />
    </>
  );
};
