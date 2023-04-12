import { FaGithub, FaShareSquare } from "react-icons/fa";

const FullCard = ({ cardData }) => {
  return (
    <>
      {cardData.slice(0, 2).map((data, index) => (
        <>
          <div
            key={data.id}
            className={`full-card-container ${
              index === 1 ? "flex-row-reverse" : ""
            }`}
          >
            <img src={data.img} alt="preview" />
            <div className="project">
              <h2>{data.title}</h2>
              <p>{data.description}</p>
              <div className="tools-container">
                <p>Tools Used:</p>
                {data.tools.map((tool, index) => (
                  <p key={index} className="icon">
                    {tool}
                  </p>
                ))}
              </div>
              <div className="button-container">
                <a
                  variant="primary"
                  target="_blank"
                  rel="noreferrer"
                  href={data.githubUrl}
                >
                  <FaGithub />
                </a>
                <a
                  variant="primary"
                  target="_blank"
                  rel="noreferrer"
                  href={data.deployedUrl}
                >
                  <FaShareSquare />
                </a>
              </div>
            </div>
          </div>
        </>
      ))}
    </>
  );
};

export default FullCard;
