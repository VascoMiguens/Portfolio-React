import { Card } from "react-bootstrap";
import { FaGithub, FaShareSquare } from "react-icons/fa";
import { useState } from "react";

const RowCard = ({ cardData }) => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleCardHover = (index) => {
    setHoveredCard(index);
  };

  const handleCardLeave = () => {
    setHoveredCard(null);
  };

  return (
    <>
      <div className="row row-cols-1 d-flex row-cols-sm-1 row-cols-md-2 row-cols-lg-2">
        {cardData.slice(2).map((data, index) => (
          <div
            key={data.id}
            className="card-container"
            onMouseEnter={() => handleCardHover(index)}
            onMouseLeave={handleCardLeave}
          >
            <Card style={{ backgroundImage: `url(${data.img})` }}>
              <div
                className={`card-details ${
                  hoveredCard === index ? "hovered" : ""
                }`}
              >
                <Card.Title>{data.title}</Card.Title>
                <Card.Text>{data.description}</Card.Text>
                <div className="tools-container">
                  <p>Tools Used:</p>
                  {data.tools.map((tool, index) => (
                    <p key={index} className="icon">
                      {tool}
                    </p>
                  ))}
                </div>
                <div className="button-container">
                  <a href={data.githubUrl} target="_blank" rel="noreferrer">
                    <FaGithub />
                  </a>
                  <a href={data.deployedUrl} target="_blank" rel="noreferrer">
                    <FaShareSquare />
                  </a>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
};

export default RowCard;
