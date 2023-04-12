import { Link, useMatch } from "react-router-dom";
import React, { useState } from "react";
import LogoV from "../assets/logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <img src={LogoV} alt="logo" />
      </Link>
      <div className="menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <GiHamburgerMenu />
      </div>
      <ul className={isMenuOpen ? "open" : ""}>
        <CustomLink to="/" onClick={() => setIsMenuOpen(false)}>
          Home
        </CustomLink>
        <CustomLink to="/portfolio" onClick={() => setIsMenuOpen(false)}>
          Portfolio
        </CustomLink>
        <CustomLink to="/contact" onClick={() => setIsMenuOpen(false)}>
          Contact
        </CustomLink>
        <CustomLink to="/resume" onClick={() => setIsMenuOpen(false)}>
          Resume
        </CustomLink>
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
