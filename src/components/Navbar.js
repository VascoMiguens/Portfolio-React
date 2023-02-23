import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        Vasco
      </Link>
      <ul>
        <CustomLink to="/">About</CustomLink>
        <CustomLink to="/portfolio">Portfolio</CustomLink>
        <CustomLink to="/contact">Contact</CustomLink>
        <CustomLink to="/resume">Resume</CustomLink>
      </ul>
    </nav>
  );
}

// This code is a custom React component that renders a Link component with a list item. The component takes in a "to" prop, which is used to create a resolved path. It also takes in any additional props and children. The component then uses the useMatch hook to check if the resolved path matches the current path. If it does, the list item is given the class "active". Finally, the Link component is rendered with the "to" prop and any additional props that were passed in.
function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
