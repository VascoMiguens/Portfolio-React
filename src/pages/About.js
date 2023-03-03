import React from "react";
import programming from "../programming.json";
import Lottie from "lottie-react";

export default function About() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3">
        <h1>About</h1>
        <div className="about">
          <div className="presentation">
            <p>
              Meet Vasco Miguéns, the full stack web developer and
              jack-of-all-trades in the web development world. With a passion
              for sports and computers (yes, it's a weird mix, but it works for
              him), he traded in sunny beaches and sunsets with friends in his
              home country for the chance to pursue his passion in chilly
              England. He's been honing his skills for the past year and
              recently completed a full stack bootcamp to give structure to his
              wild ideas and turn them into reality. Now, he's ready to tackle
              any project thrown his way, make the internet a better place, one
              website at a time, all while missing the beach and the sunsets
              with his friends
            </p>
          </div>
          <div style={{ width: "30%" }}>
            <Lottie options={defaultOptions} animationData={programming} />
          </div>
        </div>
      </div>
    </>
  );
}
