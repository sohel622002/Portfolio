import { useState } from "react";
import "./Header.css";

import { NavLink } from "react-router-dom";

function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const mobileNavStyle = {
    opacity: mobileNavOpen ? 1 : 0,
    transform: mobileNavOpen ? "translateY(100%)" : "translateY(0%)",
  };

  return (
    <header className="header">
      <h2 className="logo">
        <NavLink to="/">Mo.Sohel</NavLink>
      </h2>
      <span
        className="mobile-hamb-icon"
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <i class="fa-solid fa-bars"></i>
      </span>
      <ul className="header-navigation">
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/projects">Projects</NavLink>
        </li>
      </ul>
      {mobileNavOpen && (
        <div className="mobile-nav" style={mobileNavStyle}>
          <ul className="mob-header-navigation">
            <li>
              <NavLink to="/about" onClick={() => setMobileNavOpen(false)}>About</NavLink>
            </li>
            <li>
              <NavLink to="/projects" onClick={() => setMobileNavOpen(false)}>Projects</NavLink>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
