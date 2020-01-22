import React, { useState } from "react";

import useDarkMode from "../hooks/useDarkMode";

const darkModeKey = true;
const darkModeInitial = "isDarkMode";

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode(darkModeKey, darkModeInitial);
  // const toggleMode = e => {
  //   e.preventDefault();
  //   setDarkMode(!darkMode);
  // };
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={setDarkMode}
          className={darkMode ? "toggle toggled" : "toggle"}
        />
      </div>
    </nav>
  );
};

export default Navbar;
