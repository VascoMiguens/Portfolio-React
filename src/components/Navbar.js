import { Link, useMatch, useResolvedPath } from "react-router-dom";
import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        Vasco Miguéns
      </Link>
      <ul>
        <CustomLink to="/">About me</CustomLink>
        <CustomLink to="/portfolio">Portfolio</CustomLink>
        <CustomLink to="/contact">Contact</CustomLink>
        <CustomLink to="/resume">Resume</CustomLink>
      </ul>
    </nav>
  );
}

// A custom link component that highlights the active link in the navbar based on the current route
function CustomLink({ to, children, ...props }) {
  const isActive = useMatch(to, { exact: false });
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props} isActive={isActive}>
        {children}
      </Link>
    </li>
  );
}
