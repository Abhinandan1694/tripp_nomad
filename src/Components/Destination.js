import "./destination.css";
import React from "react";
import Img2 from "../assets/img2.jpg"
import Img12 from "../assets/img12.jpg"

const Destination = () => {
  return (
    <React.Fragment>
      <div className="destination">
        <h1>Popular Destinations</h1>
        <p>Tours give you an opportunity to see a lot, within a time frame.</p>
        <div className="first-des">
          <div className="des-text">
            <h2>Taal Volcano, Batangas</h2>
            <p>
              Taal Volcano is the second most active volcano found in the
              province of Batangas. A complex volcano in the middle of Taal Lake
              and is often called an island within a lake, that is an island
              within a lake that is on an island as well as one of the lowest
              volcano in the world having 311 meters elevation. It offers a very
              a spectacular view seen from Tagaytay Ridge. Taal volcano is
              located around 50 kilometers away from Manila, capital of the
              Philippines.
            </p>
          </div>
          <div className="image">
            <img src={Img2} alt="img" />
            <img src={Img12} alt="img" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Destination;
