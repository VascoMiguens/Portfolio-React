import { FaGithub, FaLinkedin } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/VascoMiguens"
          >
            <FaGithub color="#fff" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/vasco-miguens-312a92115/"
          >
            <FaLinkedin color="#fff" />
          </a>
        </li>
      </ul>
      <div className="vertical-line"></div>
    </div>
  );
};
export default Sidebar;
