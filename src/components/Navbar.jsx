import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <NavLink to="/" className="navbar-link">
            About
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/resume" className="navbar-link">
            Resume
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/portfolio" className="navbar-link">
            Portfolio
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/blogs" className="navbar-link">
            Blog
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/contact" className="navbar-link">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
