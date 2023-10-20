import "./Header.css";

import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <h2 className="logo">
        <NavLink  to="/">Mo.Sohel</NavLink >
      </h2>
      <ul className="header-navigation">
        <li>
          <NavLink  to="/about">About</NavLink >
        </li>
        <li>
          <NavLink  to="/projects">Projects</NavLink >
        </li>
        <li>
          <NavLink  to="/contact">Contact</NavLink >
        </li>
      </ul>
    </header>
  );
}

export default Header;
