import { Link, useMatch, useResolvedPath } from "react-router-dom";
import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to={`${process.env.PUBLIC_URL}/`} className="logo">
        Vasco Miguéns
      </Link>
      <ul>
        <CustomLink to={`${process.env.PUBLIC_URL}/`}>About</CustomLink>
        <CustomLink to={`${process.env.PUBLIC_URL}/portfolio`}>
          Portfolio
        </CustomLink>
        <CustomLink to={`${process.env.PUBLIC_URL}/contact`}>
          Contact
        </CustomLink>
        <CustomLink to={`${process.env.PUBLIC_URL}/resume`}>Resume</CustomLink>
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
