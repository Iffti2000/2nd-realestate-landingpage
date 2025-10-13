import React, { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const getMenuStyles = (menuOpened) => {
    if (window.innerWidth <= 800) {
      return { right: menuOpened ? "0" : "-100%" };
    }
    return {};
  };

  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        {/* Logo */}
        <img src="./logo.png" alt="logo" width={100} />

        {/* Navigation Menu */}
        <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
          <a href="#residencies">Residencies</a>
          <a href="#value">Our Value</a>
          <a href="#contact">Contact Us</a>
          <a href="#get-started">Get Started</a>
          <button className="button">
            <a href="#contact">Contact</a>
          </button>
        </div>

        {/* Menu Icon (for mobile) */}
        <div className="menu-icon" onClick={() => setMenuOpened((prev) => !prev)}>
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
