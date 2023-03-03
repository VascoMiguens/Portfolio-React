import { Link, useMatch, useResolvedPath } from "react-router-dom";
import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/portfolio-react/about" className="logo">
        Vasco Miguéns
      </Link>
      <ul>
        <CustomLink to="/portfolio-react/about">About</CustomLink>
        <CustomLink to="/portfolio-react/portfolio">Portfolio</CustomLink>
        <CustomLink to="/portfolio-react/contact">Contact</CustomLink>
        <CustomLink to="/portfolio-react/resume">Resume</CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const { pathname } = useResolvedPath(to);
  const isActive = useMatch({ path: pathname, end: true });
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
