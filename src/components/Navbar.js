import { Link, useMatch, useResolvedPath } from "react-router-dom";
import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        Vasco Miguéns
      </Link>
      <ul>
        <CustomLink to="/portfolio-react">About</CustomLink>
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
      <Link to={`${process.env.PUBLIC_URL}${to}`} {...props}>
        {children}
      </Link>
    </li>
  );
}
