import { FaGithub, FaLinkedin } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/VascoMiguens"
        >
          <FaGithub color="#fff" />
        </a>
      </div>
      <div>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/vasco-miguens-312a92115/"
        >
          <FaLinkedin color="#fff" />
        </a>
      </div>
      <div className="vertical-line"></div>
    </div>
  );
};

export default Sidebar;
