import { Link } from "react-router-dom";
import me from "../assets/mecartoon.png";
const Home = () => {
  return (
    <div className="row row row-cols-1 d-flex row-cols-sm-1 row-cols-md-1 row-cols-lg-2 ">
      <div className="home">
        <h2>Meet</h2>
        <h1>Vasco Miguéns</h1>
        <p>
          With a passion for sports and computers (yes, it's a weird mix, but it
          works for him), he traded in sunny beaches and sunsets with friends in
          his home country for the chance to pursue his passion in chilly
          England. He's been honing his skills for the past year and recently
          completed a full stack web development bootcamp to give structure to
          his wild ideas and turn them into reality. Now, he's ready to tackle
          any project thrown his way, make the internet a better place, one
          website at a time, all while missing the beach and the sunsets with
          his friends
        </p>
        <Link style={{ "text-decoration": "none" }} to={"/contact"}>
          <div className="contact-btn">Contact me</div>
        </Link>
      </div>
      <div className="me">
        <img src={me} alt="me" />
      </div>
    </div>
  );
};

export default Home;
