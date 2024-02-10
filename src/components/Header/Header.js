import "./Header.css";

import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <h2 className="logo">
        <NavLink to="/">Mo.Sohel</NavLink>
      </h2>
      <span className="mobile-hamb-icon">
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
    </header>
  );
}

export default Header;
